import { module, test } from 'qunit';
import { setupRenderingTest } from 'peek-booking-challenge/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | time-select', function (hooks) {
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
      time: '',
    });
  });

  test('correct display if no date is selected', async function (assert) {
    await render(
      hbs`<TimeSelect class="time" @availability={{this.availabilityDates}} />`
    );

    assert.dom('.time > p').hasText('No Date Selected');
  });

  test('displays correct times', async function (assert) {
    this.booking.date = this.availabilityDates[0].date;

    await render(
      hbs`<TimeSelect class="time" @availability={{this.availabilityDates}} />`
    );

    assert
      .dom('.timeSelect')
      .exists({ count: this.availabilityDates[0].availabilityTimes.length });

    assert
      .dom('.time > button:nth-of-type(1)')
      .includesText(this.availabilityDates[0].availabilityTimes[0].time);

    assert
      .dom('.time > button:nth-of-type(2)')
      .includesText(this.availabilityDates[0].availabilityTimes[1].time);

    assert
      .dom('.time > button:nth-of-type(3)')
      .includesText(this.availabilityDates[0].availabilityTimes[2].time);
  });

  test('booking time gets updated', async function (assert) {
    this.booking.date = this.availabilityDates[0].date;

    await render(
      hbs`<TimeSelect class="time" @availability={{this.availabilityDates}} />`
    );

    await click('.time > button:nth-of-type(1)');
    assert.strictEqual(
      this.booking.time,
      this.availabilityDates[0].availabilityTimes[0].time
    );
  });
});
