import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class GuestInfoComponent extends Component {
  @service store;

  @tracked booking = this.store.peekRecord('booking', 'booking_1');

  @tracked disabled = this.booking.tickets.length === 0;

  @tracked invalidEmail = false;
  @tracked invalidPhone = false;

  @action updateName(e) {
    this.booking.primaryGuest.name = e.target.value;
  }

  @action validateEmail(e) {
    let email = e.target.value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      this.invalidEmail = true;
    } else {
      this.invalidEmail = false;
      this.booking.primaryGuest.email = e.target.value;
    }
  }

  @action validatePhone(e) {
    let phone = e.target.value;
    let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
      this.invalidPhone = true;
    } else {
      this.invalidPhone = false;
      this.booking.primaryGuest.phone = e.target.value;
    }
  }
}
