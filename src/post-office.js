import { bot } from './fitfreak'

import { spreadsheetConnect } from './auth'
import { getUserData } from './spreadsheets'

import { processUserData } from './helpers'

export default function visitThePostOffice(data) {
  if (!isJunkMail(data.type)) {
    switch(data.type) {
      case 'message': getDataProcessMessage(data)
    }
  }
}

function isJunkMail(type) {
  const junkTypes = ['hello', 'reconnect_url']
  if (!junkTypes.indexOf(type)) return true
}

function getDataProcessMessage(data) {
  const users = bot.getUsers()
  const sender = users._value.members.filter((user) => user.id === data.user)[0]
  if (sender) {
    spreadsheetConnect(auth => {
      getUserData(auth, sender.name, function(err, res) {
        res = res[0]; // single user
        if (!err && err === 'no data found') {
          // create user row
        } else {
          bot.postMessageToUser(sender.name, `Hello ${sender.name}`)
          let userData = processUserData(res);
          processMessage(sender, userData);
        }
      });
    });
  }
}

function processMessage(sender, userData){
  console.log(sender, userData);
}
