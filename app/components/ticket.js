import Component from '@glimmer/component';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class TicketComponent extends Component {
  @service store;
  @tracked booking = this.store.peekRecord('booking', 'booking_1');

  @tracked qty = 0;

  @action increaseQty() {
    let ticketId = this.args.ticket.id;
    this.qty++;
    this.booking.tickets.push({
      id: ticketId,
      reservationStatus: 'CONFIRMED',
    });
  }

  @action decreaseQty() {
    this.qty > 0 ? this.qty-- : this.qty;

    const ticketId = this.args.ticket.id;
    const index = this.booking.tickets.findIndex(
      (ticket) => ticket.id === ticketId
    );
    index !== -1 ? this.booking.tickets.splice(index, 1) : null;
  }
}
