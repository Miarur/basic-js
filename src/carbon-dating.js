const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  if(!(typeof sampleActivity === 'string')) return false; 

  const HALF_LIFE_PERIOD = 5730; 
  const MODERN_ACTIVITY = 15; 
  const SAMPLE_ACTIVITY = +sampleActivity > 0 && sampleActivity <= 15 ? +sampleActivity : 0; 

  const k =  ( 0.693 / HALF_LIFE_PERIOD);
  console.log(k);

  let time = Math.ceil(Math.log(MODERN_ACTIVITY/ SAMPLE_ACTIVITY) / k);
  console.log(time);
  return time === Infinity ? false : time; 
}

module.exports = {
  dateSample
};
