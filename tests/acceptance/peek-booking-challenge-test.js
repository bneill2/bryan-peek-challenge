import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'peek-booking-challenge/tests/helpers';
import { calendarSelect } from 'ember-power-calendar/test-support/helpers';

module('Acceptance | peek booking challenge', function (hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(function () {
    this.setProperties({
      activity: {
        id: 'activity_1',
        name: 'Awesome Walking Tour',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      tickets: [
        {
          id: 'ticket_1',
          name: 'Adult',
          price: {
            amount: '10.00',
            currency: 'USD',
            formatted: '$10.00',
          },
        },
        {
          id: 'ticket_2',
          name: 'Child',
          price: {
            amount: '5.00',
            currency: 'USD',
            formatted: '$5.00',
          },
        },
      ],
      availabilityDates: [
        {
          date: '2024-07-01',
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
  });

  test('create booking', async function (assert) {
    await visit('/booking');
    assert.strictEqual(currentURL(), '/booking');

    await calendarSelect(
      '.calendar',
      new Date(this.availabilityDates[0].date + 'T00:00:00')
    );

    assert.dom('.timeSelect').exists({
      count: this.availabilityDates[0].availabilityTimes.length,
    });

    await click('.time button:nth-of-type(2)');

    assert.dom('.ticket-item').exists({ count: this.tickets.length });

    await click(
      '.ticket-item:first-child .counter-container button:nth-of-type(2)'
    );

    await click('.button.bookNow');

    assert.strictEqual(currentURL(), '/confirmation');
    assert.dom('h1').hasText('Booking Confirmed!');
    assert.dom('h4:first-of-type').hasText('Date:');
    assert.dom('.confirmation-date').hasText(this.availabilityDates[0].date);
    assert.dom('h4:nth-of-type(2)').hasText('Time:');
    assert
      .dom('.confirmation-time')
      .hasText(this.availabilityDates[0].availabilityTimes[1].time);
    assert.dom('h4:nth-of-type(3)').hasText('Tickets:');

    assert.dom('.confirmation-tickets').exists();
    assert
      .dom('.confirmation-tickets > p:first-child')
      .hasText(`${this.tickets[0].name} x1 $10`);
    assert
      .dom('.confirmation-tickets > p:last-of-type')
      .hasText(`${this.tickets[1].name} x0 $0`);
    assert.dom('h4:nth-of-type(4)').hasText('Total:');
    assert.dom('.confirmation-total').hasText('$10');
  });
});
