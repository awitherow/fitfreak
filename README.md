# fitfreak
fit robot for slack, reminds me to get off my ass every hour.

## dependencies

https://www.npmjs.com/package/slackbots
https://www.npmjs.com/package/moment
https://www.npmjs.com/package/dotenv

## installation

> based on os x

you will need to have
- node : https://nodejs.org/en/ (server)
- npm : http://blog.npmjs.org/post/85484771375/how-to-install-npm (package manager)
- git : https://git-scm.com/ (source control system)

after these are all installed, open the terminal.

```bash
ls
cd Documents
git clone https://github.com/awitherow/fitfreak
cd fitfreak
npm install
```

## configuration

create a .env folder via the terminal.

```bash
mv .env.example .env
atom .evn
```

don't have atom installed? https://atom.io/

you should see

```
SLACK_BOT_TOKEN=""
```

Paste your code between the quotations.

Don't have one? https://api.slack.com/bot-users. You will get your slack bot token on the page you create the bot.

```bash
atom index.js
```

or better, add the fitfreak project to atom via file > add project to atom.

on line 20, change

```javascript
var users = ['austin', 'olga'];
```

to your username(s).

Or if you wanna send to a group, or extend the bot, check here https://www.npmjs.com/package/slackbots
