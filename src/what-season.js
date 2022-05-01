const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime();
  } catch (e) {
    throw new Error('Invalid date!');
  }

  let currentMonth = date.getMonth(); 

  let year = [
    [0, 1, 11, 'winter'],
    [2, 3, 4, 'spring'], 
    [5, 6, 7, 'summer'],
    [8, 9, 10, 'autumn'],
  ];

  console.log(year);

  for(let i = 0 ; i < year.length; i++) {
    for(let j = 0; j < year[i].length; j++) {
      if(currentMonth === year[i][j]) {
        return year[i][3]
      }
    }
  }
}

module.exports = {
  getSeason
};
