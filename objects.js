exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return Reflect.apply(fn, obj,[]);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    const ownProperties = []
    for (let key in obj) {
      if(obj.hasOwnProperty(key)) {
        ownProperties.push(`${key}: ${obj[key]}`);
      }
    }
    return ownProperties;
  }
};
