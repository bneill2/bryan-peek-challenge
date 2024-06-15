import Component from '@glimmer/component';
import { service } from '@ember/service';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { registerDateLibrary } from 'ember-power-calendar';
import DateUtils from 'ember-power-calendar-moment';

registerDateLibrary(DateUtils);

export default class CalendarComponent extends Component {
  @service store;

  @tracked center = new Date();
  @tracked selected = null;

  @tracked booking = this.store.peekRecord('booking', 'booking_1');

  get availableDates() {
    let { availability } = this.args;
    return availability
      .filter((date) => date.status === 'AVAILABLE')
      .map((date) => {
        return date.date;
      })
      .sort();
  }

  get soldOutDates() {
    let { availability } = this.args;
    return availability
      .filter((date) => date.status === 'SOLD_OUT')
      .map((date) => {
        return date.date;
      })
      .sort();
  }

  get minDate() {
    return this.availableDates[0];
  }

  get maxDate() {
    return this.availableDates[this.availableDates.length - 1];
  }

  @action
  onCenterChange(selected) {
    this.center = selected.date;
  }

  @action
  onSelect(selected) {
    this.selected = selected.date;
    this.booking.date = selected.date.toISOString().split('T')[0];
  }
}
