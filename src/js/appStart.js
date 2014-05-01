
// Load Polyfills and Superglobals (Maybe bring in Modernizr)
define(
// Modules that should be loaded first add as dependencies (shims and such)
  [
    'basic',
    'polymer'
  ], 
// Everything else can be lazy loaded here
  function($){

  // Load needed Modules
    require(['widgetManager']);
    require(['loadingScreen']);
    //require(['']);


  // Other Stuff
  // Testing BasicJS
    var chk = function(str){
      return {
        isIn: function(obj){
          return (str in obj) ? 'yes' : 'no';
        }
      };
    };
    console.log('window.basic === basic:', window.basic === basic);
    console.log('basic.find'  , chk('find')   .isIn(basic));
    console.log('basic.attr'  , chk('attr')   .isIn(basic));
    console.log('basic.on'    , chk('on')     .isIn(basic));
    console.log('basic.toJson', chk('toJson') .isIn(basic));
    console.log('basic.ajax'  , chk('ajax')   .isIn(basic));
    console.log('basic.store' , chk('store')  .isIn(basic));
  // End BasicJS Tests

  }
);


