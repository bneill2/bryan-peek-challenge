import Component from '@glimmer/component';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class TicketComponent extends Component {
  @service store;
  @tracked booking = this.store.peekRecord('booking', 'booking_1');

  @tracked qty = 0;

  get ticketsAvailable() {
    return this.args.availability
      .find((date) => date.date === this.booking.date)
      .availabilityTimes.find((time) => time.time === this.booking.time)
      .spotsLeft;
  }

  @action increaseQty() {
    let ticketId = this.args.ticket.id;
    if (this.booking.tickets.length < this.ticketsAvailable) {
      this.qty++;
      this.booking.tickets.push({
        id: ticketId,
        reservationStatus: 'CONFIRMED',
      });
    }
  }

  @action decreaseQty() {
    this.qty > 0 ? this.qty-- : this.qty;

    const ticketId = this.args.ticket.id;
    const index = this.booking.tickets.findIndex(
      (ticket) => ticket.id === ticketId
    );
    console.log(index);
    index !== -1 ? this.booking.tickets.splice(index, 1) : null;
  }
}
