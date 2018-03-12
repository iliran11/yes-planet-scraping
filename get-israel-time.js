const moment = require('moment-timezone');

module.exports = function () {
  const currentDate = moment().tz('Asia/Jerusalem').format('DD-MM-YYYY__HH-mm')
  return currentDate
}