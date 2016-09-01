require('dotenv').config();
var slackTerminal = require('slack-terminalize');

slackTerminal.init(process.env.SLACK_BOT_TOKEN, {
    // slack client options here
    }, {
    CONFIG_DIR: __dirname + '/config',
    COMMAND_DIR: __dirname + '/commands'
});
