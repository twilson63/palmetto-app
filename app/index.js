var pkg = require('../package.json');

var ref = window.location.pathname;
if (ref === '/') { ref = pkg.config.ref; }

require('pfc-app')({
  flow: require('pfc-pouchdb'),
  state: {
    title: pkg.config.title,
    ref: ref
  },
  services: require('./services'),
  components: require('./components'),
  render: require('./render'),
  routes: require('./routes')
});