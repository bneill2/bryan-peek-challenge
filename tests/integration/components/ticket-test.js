import { module, test } from 'qunit';
import { setupRenderingTest } from 'peek-booking-challenge/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ticket', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      ticket: {
        id: 'ticket_1',
        name: 'Adult',
        price: {
          amount: '10.00',
          currency: 'USD',
          formatted: '$10.00',
        },
      },
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
      date: '2024-06-01',
      time: '8:00 AM',
      tickets: [],
    });
  });

  test('displays ticket information', async function (assert) {
    await render(
      hbs`<Ticket @ticket={{this.ticket}} @availability={{this.availabilityDates}}/>`
    );

    assert.dom('.ticket-name').hasText(this.ticket.name);
    assert
      .dom('.ticket-price')
      .hasText(`${this.ticket.price.formatted} ${this.ticket.price.currency}`);
  });

  test('increase qty', async function (assert) {
    await render(
      hbs`<Ticket @ticket={{this.ticket}} @availability={{this.availabilityDates}}/>`
    );

    assert.dom('.ticket-qty').hasText('0');

    await click('.button.small:nth-of-type(2)');
    await click('.button.small:nth-of-type(2)');
    await click('.button.small:nth-of-type(2)');

    assert.dom('.ticket-qty').hasText('3');
    assert.deepEqual(this.booking.tickets, [
      { id: this.ticket.id, reservationStatus: 'CONFIRMED' },
      { id: this.ticket.id, reservationStatus: 'CONFIRMED' },
      { id: this.ticket.id, reservationStatus: 'CONFIRMED' },
    ]);
  });

  test('decrease qty', async function (assert) {
    await render(
      hbs`<Ticket @ticket={{this.ticket}} @availability={{this.availabilityDates}}/>`
    );

    assert.dom('.ticket-qty').hasText('0');

    await click('.button.small:nth-of-type(2)');
    await click('.button.small:nth-of-type(2)');
    await click('.button.small:nth-of-type(2)');
    await click('.button.small:nth-of-type(1)');
    await click('.button.small:nth-of-type(1)');

    assert.dom('.ticket-qty').hasText('1');

    assert.deepEqual(this.booking.tickets, [
      { id: this.ticket.id, reservationStatus: 'CONFIRMED' },
    ]);
  });

  test('decrease qty 0', async function (assert) {
    await render(
      hbs`<Ticket @ticket={{this.ticket}} @availability={{this.availabilityDates}}/>`
    );

    assert.dom('.ticket-qty').hasText('0');

    await click('.button.small:nth-of-type(1)');
    assert.dom('.ticket-qty').hasText('0');

    assert.deepEqual(this.booking.tickets, []);
  });
});
