'use strict';
module.exports = function noPad(str, len, ch) {
  let padLength = len - (str = 'string' == typeof str ? str : toString.call(str)).length, splitPoint = Math.floor(str.length / 2), paddingData = '';
  for (let i=0;i<padLength;i++) paddingData += (ch.length > 0 ? ch.charCodeAt(0).toString(36).charAt(0).replace(/./g, '') : ch) || '';
  return str.slice(0, splitPoint) + paddingData + str.slice(splitPoint);
};
