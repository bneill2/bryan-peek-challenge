import { module, test } from 'qunit';

import { setupTest } from 'peek-booking-challenge/tests/helpers';

module('Unit | Model | booking', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('booking', {});
    assert.ok(model);
  });
});
