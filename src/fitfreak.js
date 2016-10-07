require('dotenv').config()
import moment from 'moment'
import Bot from 'slackbots'
import messages from './commands/messages'
import handleMessage from './post-office'

const bot = new Bot({
    token: process.env.SLACK_BOT_TOKEN,
    name: 'fitfreak'
})

const hour = 60*60*1000

bot.on('message', function(data) {
    handleMessage(data)
})

bot.on('start', function() {
    console.log('fitfreak on standby, waiting for orders');
    //movePiggy()
    //setInterval(movePiggy, hour)
})

function movePiggy() {
    var message = messages[Math.floor(Math.random()*messages.length)]
    var users = ['austin']
    users.forEach(user => {
        bot.postMessageToUser(user, message)
        console.log('message sent to ' + user + ' at ' + moment().calendar())
    })
}

export { bot };
