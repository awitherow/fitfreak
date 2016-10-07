import { bot } from './fitfreak'
import messages from './commands/messages'
import { spreadsheetConnect } from './auth';
import { getUserData } from './spreadsheets';

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
      let userData = getUserData(auth, sender.name)
      bot.postMessageToUser(sender.name, 'Hello')
    });
  }

}
