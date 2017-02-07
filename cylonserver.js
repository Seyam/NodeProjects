var Cylon = require('cylon');

Cylon.api('http');

Cylon.robot({
  connections: {
    loopback: { adaptor: 'loopback' }
  },

  devices: {
    ping: { driver: 'ping' }
  },

  work: function() {
  }
}).start();