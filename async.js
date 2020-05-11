exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  },

  manipulateRemoteData: function(url) {
    const data = $.get(url).then(res => {
      const people = res.people.map(person => person.name);
      return people.sort();
    })
    return data;
  }
};
