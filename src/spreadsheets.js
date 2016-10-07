import google from 'googleapis'

function getUserData(auth, name, cb) {
  var sheets = google.sheets('v4')
  sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: '15y8thmW_8rWHzmO4O5aJ097M7VqPVcyGIE6yoQxfT9Q',
    range: 'User Data!A1:D',
  }, function(err, res) {
    if (err) {
      console.log('The API returned an error: ' + err)
      return
    }
    const rows = res.values
    if (rows.length == 0) {
      cb('no data found', {})
    } else {
      cb(null, rows.filter(row => row[0] === name))
    }
  });
}

export {
  getUserData
}
