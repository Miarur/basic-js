const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  // if(!Array.isArray(arr)) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // } else if(!arr.length) {
  //   return [];
  // }

  // let addElem = '';
  // let newArr = arr; 

  // for(let i = 0; i < newArr.length; i++) {
  //   switch(newArr[i]) {
  //     case '--discard-next': 
  //     if(i + 1 === arr.length) {
  //       newArr = newArr.splice(i, 1);
  //       return newArr;
  //     } else {
  //       newArr = newArr.splice(i - 1, 2);
  //       return newArr;
  //     }

  //     case '--discard-prev': 
  //     if(i === 0) {
  //       newArr.shift();
  //       return newArr;
  //     } else {
  //       newArr = newArr.splice(i - 1, 2);
  //       return newArr;
  //     }

  //     case '--double-next': 
  //     if(i + 1 === arr.length) {
  //       newArr = arr.pop();
  //       return newArr;
  //     } else {
  //       addElem = arr[i + 1];
  //       newArr = newArr.splice(i + 1, 1, addElem);
  //       return newArr;
  //     }

  //     case '--double-prev': 
  //     if(i + 1 < 0 ) {
  //       newArr = arr.splice(i, 1);
  //       return newArr;
  //     } else {
  //       addElem = arr[i + 1];
  //       newArr = newArr.splice(i + 1, 1, addElem);
  //       return newArr;
  //     }

  //     default: 
  //     return arr;
  //   }
  // }
};

module.exports = {
  transform
};
