var pkg = require('../package.json');
var page = require('page');

// set default redirect
page.redirect('/', pkg.config.ref);

var state = { title: pkg.config.title };

if (window.location.pathname !== '/') {
  state.ref = window.location.pathname;
}

require('pfc-app')({
  flow: require('pfc-pouchdb'),
  state: state,
  services: require('./services'),
  components: require('./components'),
  render: require('./render'),
  routes: require('./routes')
});