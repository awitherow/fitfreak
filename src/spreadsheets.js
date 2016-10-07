var google = require('googleapis');

function getUserData(auth) {
  var sheets = google.sheets('v4');
  sheets.spreadsheets.values.get({
    auth: auth,
    spreadsheetId: '15y8thmW_8rWHzmO4O5aJ097M7VqPVcyGIE6yoQxfT9Q',
    range: 'User Data!A1:D',
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length == 0) {
      console.log('No data found.');
    } else {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        // Print columns A and E, which correspond to indices 0 and 4.
        console.log('%s, %s', row[0], row[1], row[2], row[3]);
      }
    }
  });
}
