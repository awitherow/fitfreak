import fs from 'fs'
import readline from 'readline'
import google from 'googleapis'
import googleAuth from 'google-auth-library'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']
const TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'sheets.googleapis.com-nodejs-quickstart.json'

function spreadsheetConnect(cb) {
  fs.readFile('client_secret.json', function(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err)
      return
    }
    authorize(JSON.parse(content), cb)
  });
}

export {
  spreadsheetConnect,
}

function authorize(credentials, callback) {
  const clientSecret = credentials.installed.client_secret
  const clientId = credentials.installed.client_id
  const redirectUrl = credentials.installed.redirect_uris[0]
  const auth = new googleAuth()
  const oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl)

  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback)
    } else {
      oauth2Client.credentials = JSON.parse(token)
      callback(oauth2Client)
    }
  });
}

function getNewToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting this url: ', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close()
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err)
        return
      }
      oauth2Client.credentials = token
      storeToken(token)
      callback(oauth2Client)
    });
  });
}

function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code != 'EEXIST') {
      throw err;
    }
  }
  fs.writeFile(TOKEN_PATH, JSON.stringify(token));
  console.log('Token stored to ' + TOKEN_PATH);
}
