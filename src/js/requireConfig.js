
require.config({
  baseUrl: 'js/',
  paths: {
    basic: 'bower/basicjs/basic.min',
    polymer: 'bower/polymer-platform/platform',
  },
  shim: {
    'basic' : {
      exports: 'basic'
    },
    'polymer' : {
      exports: 'Polymer'
    }
  },
});


// Load appStart Module to get things going
require(['appStart']);


