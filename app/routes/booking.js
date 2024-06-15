import Route from '@ember/routing/route';
import { service } from '@ember/service';
import bookingData from '../booking_flow_data';

export default class BookingRoute extends Route {
  @service store;

  async model() {
    return {
      activity: bookingData.activity,
      availability: bookingData.availabilityDates,
    };
  }

  async afterModel(model) {
    // Create a new booking record in the ember-data store
    this.store.createRecord('booking', {
      id: 'booking_1',
      activityId: model.activity.id,
      reservationStatus: 'DRAFT',
      tickets: [],
    });
  }
}
