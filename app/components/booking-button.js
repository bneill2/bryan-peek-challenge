import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class BookingButtonComponent extends Component {
  @service store;

  @tracked booking = this.store.peekRecord('booking', 'booking_1');

  @action confirmBooking() {
    this.booking.reservationStatus = 'CONFIRMED';
  }
}
