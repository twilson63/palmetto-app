// routes module

/*
This module handles all of your routes and 
converts them into event emitter events for
your reception in your components.
*/

module.exports = function(page, ee) {
  page('/login', function() {
    ee.emit('/login');
  });
  page('/home', function() {
    ee.emit('/home');
  });
};