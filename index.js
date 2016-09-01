require('dotenv').config();
var Bot = require('slackbots');

var bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'fitfreak'
});

bot.on('start', function() {
    bot.postMessageToUser('@awitherow', 'hello bro!');
    console.log('message sent');
});
