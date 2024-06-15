import Route from '@ember/routing/route';
import { service } from '@ember/service';
import bookingData from '../booking_flow_data';

export default class ConfirmationRoute extends Route {
  @service store;

  async model() {
    return {
      activity: bookingData.activity,
      booking: this.store.peekRecord('booking', 'booking_1'),
    };
  }

  afterModel(model) {
    if (!model.booking) {
      this.transitionTo('booking');
    }
  }
}
