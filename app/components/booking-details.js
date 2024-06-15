import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BookingDetailsComponent extends Component {
  @tracked booking = this.args.booking;
  @tracked activity = this.args.activity;

  get date() {
    const dateParts = this.booking.date.split('-');
    const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    return formattedDate;
  }

  get tickets() {
    let qty = [];
    this.activity.tickets.forEach((ticket) => {
      qty.push({
        id: ticket.id,
        name: ticket.name,
        qty: 0,
        amount: ticket.price.amount,
        total: 0,
        price: ticket.price.formatted,
      });
    });

    this.booking.tickets.forEach((ticket) => {
      let matchingId = qty.find((item) => item.id === ticket.id);
      if (matchingId) {
        matchingId.qty++;
        matchingId.total = (matchingId.qty * matchingId.amount).toFixed(2);
      }
    });

    return qty;
  }

  get totalPurchase() {
    let total = 0;
    this.tickets.forEach((ticket) => {
      total += ticket.qty * ticket.amount;
    });

    return total.toFixed(2);
  }
}
