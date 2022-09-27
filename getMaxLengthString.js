const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if(arrayOfString === undefined || arrayOfString === null){
    return undefined
  } else {
    let arr = arrayOfString.map(lengthh =>lengthh.length)
    let lengthhMax = Math.max(...arr)
    return arrayOfString.filter(lengthh =>lengthh.length ===lengthhMax)
  }
}
module.exports = getMaxLengthString