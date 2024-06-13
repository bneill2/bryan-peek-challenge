'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function () {
  let app = new EmberApp({
    sassOptions: {
      extension: 'scss',
      includePaths: ['node_modules/ember-power-calendar/'],
    },
  });

  //...
  return app.toTree();
};
