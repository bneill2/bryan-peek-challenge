import { module, test } from 'qunit';
import { setupRenderingTest } from 'peek-booking-challenge/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ticket', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Ticket />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Ticket>
        template block text
      </Ticket>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
