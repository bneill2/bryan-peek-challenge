import Component from '@glimmer/component';

export default class BookingDetailsComponent extends Component {
  // get date() {
  //   return this.args.booking.date;
  // }

  get tickets() {
    let qty = [];
    this.args.activity.tickets.forEach((ticket) => {
      qty.push({
        id: ticket.id,
        name: ticket.name,
        qty: 0,
        amount: ticket.price.amount,
        total: 0,
        price: ticket.price.formatted,
      });
    });

    this.args.booking.tickets.forEach((ticket) => {
      let matchingId = qty.find((item) => item.id === ticket.id);
      if (matchingId) {
        matchingId.qty++;
        matchingId.total = matchingId.qty * matchingId.amount;
      }
    });
    console.log(qty);

    return qty;
  }

  get totalPurchase() {
    let total = 0;
    this.tickets.forEach((ticket) => {
      total += ticket.qty * ticket.amount;
    });

    return total;
  }
}
