import { module, test } from 'qunit';
import { setupRenderingTest } from 'peek-booking-challenge/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { calendarSelect } from 'ember-power-calendar/test-support/helpers';

module('Integration | Component | calendar', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function () {
    this.setProperties({
      availabilityDates: [
        {
          date: '2024-06-01',
          status: 'AVAILABLE',
          availabilityTimes: [
            {
              time: '8:00 AM',
              spotsLeft: 8,
              status: 'AVAILABLE',
            },
            {
              time: '12:00 PM',
              spotsLeft: 8,
              status: 'AVAILABLE',
            },
            {
              time: '3:00 PM',
              spotsLeft: 8,
              status: 'AVAILABLE',
            },
          ],
        },
      ],
    });

    let store = this.owner.lookup('service:store');
    this.booking = store.createRecord('booking', {
      id: 'booking_1',
      date: '',
    });
  });

  test('calendar renders', async function (assert) {
    await render(hbs`<Calendar
    class="calendar-container"
    @availability={{this.availabilityDates}}
  />`);

    assert.dom('.calendar').exists();
  });

  test('updates booking date', async function (assert) {
    await render(hbs`<Calendar
    class="calendar-container"
    @availability={{this.availabilityDates}}
  />`);

    await calendarSelect(
      '.calendar',
      new Date(this.availabilityDates[0].date + 'T00:00:00')
    );

    assert.strictEqual(this.booking.date, this.availabilityDates[0].date);
  });
});
