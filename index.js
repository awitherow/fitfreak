require('dotenv').config();
var Bot = require('slackbots');

var bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'fitfreak'
});

var hour = 60*60*1000;

bot.on('start', function() {
    doSomethingYouFatPiggies();
    setInterval(doSomethingYouFatPiggies(), hour);
});

function doSomethingYouFatPiggies() {
    var message = ':muscle: Get up, do some push ups or face pulls. Afterwards, drink some water! :potable_water:'
    bot.postMessageToChannel('fitness', message);
}
