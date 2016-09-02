require('dotenv').config();
var moment = require('moment');
var Bot = require('slackbots');
var messages = require('./commands/messages');

var bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'fitfreak'
});

var hour = 60*60*1000;

bot.on('start', function() {
    movePiggy();
    setInterval(movePiggy, hour);
});

function movePiggy() {
    var message = messages[Math.floor(Math.random()*messages.length)];
    var users = ['austin', 'olga'];
    users.forEach(user => {
        bot.postMessageToUser(user, message);
        console.log('message sent to ' + user + ' at ' + moment().calendar());
    });
    console.log('---'));
}
