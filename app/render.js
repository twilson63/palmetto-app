var h = require('virtual-dom/h');

module.exports = function(components) {
  return function render(state) {
    return h('div', [
      h('header.container', [
        components['auth'](state),
        h('h1.title', [state.get('title')])
      ]),
      h('.container', [
        components[state.get('ref')](state)
      ])
    ]);
  }
}