import { module, test } from 'qunit';
import { setupRenderingTest } from 'peek-booking-challenge/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | guest-info', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GuestInfo />`);

    assert.dom(this.element).hasText('Name: Email: Phone:');

    // Template block usage:
    await render(hbs`
      <GuestInfo>
      Name: Email: Phone:
      </GuestInfo>
    `);

    assert.dom(this.element).hasText('Name: Email: Phone:');
  });
});
