window.Enum = (function () {
  "use strict";
  var Enum = function ( enums ) {
    var i,
        keys = [],
        values = [];

//  if(!(enums instanceof Array)){
//    throw new SyntaxError('Enum input must be an Array');
//  }

    if ( enums instanceof Array ) {
      for ( i = 0 ; i < enums.length ; i++ ) {
        try {
          Object.defineProperty(
            this,
            enums[i],
            {
              configurable: false,
              enumerable:   true,
              value:        i,
              writable:     false
            }
          );
          values.push(i);
          keys.push(enums[i]);
        } catch (e) {
          throw new TypeError('Enum Constructor Failure, you must pass a set of unique keys.');
        }
      }
    } else if ( enums instanceof Object ) {
      for ( i in enums ) {
        if ( enums.hasOwnProperty(i) ) {
          if ( values.lastIndexOf(enums[i]) !== -1 ) {
            throw new TypeError('Enum Constructor Failure, you must pass a unique value for each key');
          }
          try {
            Object.defineProperty(
              this,
              i,
              {
                configurable: false,
                enumerable:   true,
                value:        enums[i],
                writable:     false
              }
            );
            values.push(enums[i]);
            keys.push(i);
          } catch (e) {
            throw new TypeError('Enum Constructor Failure.');
          }
        }
      }
    }

//    Object.defineProperty(this, 'length', {
//      configurable: false,
//      enumerable:   false,
//      value:        enums.length,
//      writable:     false
//    });
//    Object.defineProperty(this, 'keys', {
//      configurable: false,
//      enumerable:   false,
//      value:        keys,
//      writable:     false
//    });
//    Object.defineProperty(this, 'values', {
//      configurable: false,
//      enumerable:   false,
//      value:        values,
//      writable:     false
//    });

    return Object.freeze(this);
  };

  // Prototype Functions
  Object.defineProperty(Enum.prototype, 'length', {
    configurable: false,
    enumerable:   false,
    get:          function () {
      var count = 0;
      for ( var prop in this )
        ++count;
      return count;
//      return this.keys.length;
    }
  });
  Object.defineProperty(Enum.prototype, 'keys', {
    configurable: false,
    enumerable:   false,
    get:          function () {
      var keys = [];
      for ( var prop in this )
        if ( this.hasOwnProperty(prop) )
          keys.push(prop);
      return keys;
    }
  });
  Object.defineProperty(Enum.prototype, 'values', {
    configurable: false,
    enumerable:   false,
    get:          function () {
      var values = [];
      for ( var prop in this )
        if ( this.hasOwnProperty(prop) )
          values.push(this[prop]);
      return values;
    }
  });
  Object.defineProperty(Enum.prototype, 'toString', {
    configurable: false,
    enumerable:   false,
    value:        function () {
      return '[object Enum]';
    },
    writable:     false
  });

  // Export
  return Enum;

})();

console.log('Test of Enum');
var enumTest = new Enum(['one', 'two', 'three', 'four', 'five']),
  enumTest2 = new Enum({'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5});
console.log(enumTest);
console.log(enumTest2);
