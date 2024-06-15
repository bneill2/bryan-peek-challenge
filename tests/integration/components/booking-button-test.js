import { module, test } from 'qunit';
import { setupRenderingTest } from 'peek-booking-challenge/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | booking-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BookingButton />`);

    assert.dom(this.element).hasText('Book Now');

    // Template block usage:
    await render(hbs`
      <BookingButton>
        Book Now
      </BookingButton>
    `);

    assert.dom(this.element).hasText('Book Now');
  });
});
