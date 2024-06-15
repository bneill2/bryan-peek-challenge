import { module, test } from 'qunit';
import { setupTest } from 'peek-booking-challenge/tests/helpers';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:index');
    assert.ok(route);
  });
});
