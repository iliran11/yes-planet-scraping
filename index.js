const cron = require('node-cron');
const script = require('./script.js')

cron.schedule('0 */15 * * * * *', function() {
  console.log('script ran!')
  script()
});
