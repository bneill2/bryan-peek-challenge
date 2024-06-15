import Component from '@glimmer/component';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TimeSelectComponent extends Component {
  @service store;
  @tracked booking = this.store.peekRecord('booking', 'booking_1');
  @tracked times = this.availableTimes;

  get availableTimes() {
    let { availability } = this.args;
    let bookingDate = this.booking.date;
    return availability.find((available) => available.date === bookingDate)
      .availabilityTimes;
  }

  @action selectTime(time) {
    this.booking.time = time;
  }
}
