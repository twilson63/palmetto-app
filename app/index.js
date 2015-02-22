var pkg = require('../package.json');
var page = require('page');

// set default redirect
page.redirect('/', pkg.config.ref);

require('pfc-app')({
  flow: require('pfc-pouchdb'),
  state: {
    title: pkg.config.title,
    ref: pkg.config.ref
  },
  services: require('./services'),
  components: require('./components'),
  render: require('./render'),
  routes: require('./routes')
});