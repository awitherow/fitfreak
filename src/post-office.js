import { bot } from './fitfreak'
import messages from './commands/messages'
import { spreadsheetConnect } from './auth';
import { getUserData } from './spreadsheets';
import config from './config';

export default function visitThePostOffice(data) {
  if (!isJunkMail(data.type)) {
    switch(data.type) {
      case 'message': sendToMessageProcessing(data)
    }
  }
}

function isJunkMail(type) {
  const junkTypes = ['hello', 'reconnect_url']
  if (!junkTypes.indexOf(type)) return true
}

function sendToMessageProcessing(data) {
  const users = bot.getUsers()
  const sender = users._value.members.filter((user) => user.id === data.user)[0]
  if (sender) {
    spreadsheetConnect(auth => {
      let userData = getUserData(auth, sender.name, function(err, res) {
        res = res[0]; // single user
        if (!err && err === 'no data found') {
          // create user row
        } else {
          const userDataColumns = config.userDataColumns;
          bot.postMessageToUser(sender.name, `Hello ${sender.name}`)
          let data = {};
          for (let i = 0; i < userDataColumns.length; i++) {
            const col = userDataColumns[i]
            const key = col.name
            const type = col.type
            data[key] = handleData(type, res[i])
          }
          console.log(data)
        }
      });
    });
  }
}

function handleData(type, data) {
  switch(type) {
    case 'string': return data;
    case 'json': return JSON.parse(data)
    case 'number': return parseInt(data)
    default: return data
  }
}
