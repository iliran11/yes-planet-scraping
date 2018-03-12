const cron = require('node-cron');
const script = require('./script.js')
const currentDate = require('./get-israel-time')

console.log(`started to work. ${currentDate()}`)
cron.schedule('0 */15 * * * * *', function() {
  console.log(`script ran! ${currentDate()}`)
  script()
});
