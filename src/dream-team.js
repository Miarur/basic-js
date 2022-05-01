const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

  if(arr < 1 || typeof(arr) === 'number' || arr === undefined) {
    return false;
  }
 
  let newArr = [];  
  let res = [];
  let res0; 
  let res2; 

  for(let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) !== 'boolean' && typeof(arr[i]) !== 'object' && typeof(arr[i]) !== 'number' && typeof(arr[i]) !== 'undefined') {
      newArr.push(arr[i].trim()); 
    }  
  }

  for(let i = 0; i < newArr.length; i++) {
    res.push(newArr[i][0]);
  }

  res0 = res.join('').toUpperCase();
  res2 = res0.split('').sort().join('');

  return res2;
}

module.exports = {
  createDreamTeam
};
