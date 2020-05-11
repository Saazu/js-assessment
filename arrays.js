exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (item === arr[i]) {
        return i
      }
    }
    return -1;
  },

  sum: function(arr) {
    const add = (x,y) => x + y;
    return arr.reduce(add);
  },

  remove: function(arr, item) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  removeWithoutCopy: function(arr, item) {
    let numRemovals = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        numRemovals++;
      } else {
        arr[i-numRemovals] = arr[i];
      }
    }
    for (let j = 0; j < numRemovals; j++) {
      arr.pop();
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (i < index) {
        newArr[i] = arr[i];
      }
      if (i === index) {
        newArr[i] = item;
      }
      newArr[i+1] = arr[i];
    }
    return newArr;
  },

  count: function(arr, item) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    const elementMap = new Map();
    const dupArr = [];
    for (let i = 0; i < arr.length; i++) {
      if(!elementMap.has(arr[i])) {
        elementMap.set(arr[i], true);
      } else {
        if (!dupArr.includes(arr[i])) {
          dupArr.push(arr[i]);
        }
      }
    }
    return dupArr;
  },

  square: function(arr) {
    return arr.map(x => x * x);
  },

  findAllOccurrences: function(arr, target) {
    const occurrenceArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrenceArr.push(i);
      }
    }
    return occurrenceArr;
  }
};
