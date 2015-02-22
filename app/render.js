var h = require('virtual-dom/h');

module.exports = function(components) {
  return function render(state) {
    var content = null;
    var ref = state.get('ref');
    
    if (ref && components[ref]) {
      content = components[ref](state);
    }

    return h('div', [
      h('header.container', [
        components['auth'](state),
        h('h1.title', [state.get('title')])
      ]),
      h('.container', [content])
    ]);
  }
}