# fitfreak
fit robot for slack, reminds me to get off my ass every hour.

written in node, using google spreadsheets for data storage.

## deploy your own at work!

clone the repo,

```bash
touch .env
atom .env
```

copy and paste the ```.env.example``` contents in ```.env```.

set up the bot on your slack account, SLACK_BOT_TOKEN will be your token in ```.env```.

set up google spreadsheet authentication

- https://developers.google.com/sheets/quickstart/nodejs

create a spreadsheet, get the id from the URL, set this ID to SPREADSHEET_ID in your ```.env```.

```bash
npm i
npm run dev
```

create a channel #wellness in your slack, and fitfreak will take over from there. ```coming soon```

## commands

### sign up for a course.

Sign up for a variety of courses. fitfreak will coach you through a variety of courses that you sign up for. Currently, you can only sign up for one course.

```signup course-name```

#### courses

1. wellness-101 ```coming soon```
2. hydration ```coming soon```
3. stretching ```coming soon```
4. stress-reduction ```coming soon```
5. meditation ```coming soon```

Have a suggestion?

### set preferences

Coming soon!

```pref preference-name preference-val```

#### active-hours

accepted answers

1. ```disable``` will disable your account until you interact with fitfreak again.
2. ```workweek``` fitfreak will only coach you mon-fri
