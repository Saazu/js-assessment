exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return Reflect.apply(fn, this, arr);
  },

  speak: function(fn, obj) {
    return Reflect.apply(fn, obj, [])
  },

  functionFunction: function(str) {
    return function (newStr) {
      return `${str}, ${newStr}`;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(x => function () {
      return fn(x)
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    [arg1, ...argRest] = arguments;
    return Reflect.apply(fn, null, argRest);
  },

  partialUsingArguments: function(fn) {
    
  },

  curryIt: function(fn) {

  }
};
