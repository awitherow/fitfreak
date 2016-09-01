require('dotenv').config();
var Bot = require('slackbots');
var messages = require('./commands/messages');

var bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'fitfreak'
});

var hour = 60*60*1000;

bot.on('start', function() {
    doSomethingYouFatPiggies();
    setInterval(doSomethingYouFatPiggies, hour);
});

function doSomethingYouFatPiggies() {
    var message = messages[Math.floor(Math.random()*messages.length)];
    bot.postMessageToChannel('fitness', message);
}
