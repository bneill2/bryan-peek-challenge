import Route from '@ember/routing/route';
import bookingData from '../booking_flow_data';

export default class BookingRoute extends Route {
  async model() {
    return {
      activity: bookingData.activity,
      availability: bookingData.availabilityDates,
    };
  }
}
