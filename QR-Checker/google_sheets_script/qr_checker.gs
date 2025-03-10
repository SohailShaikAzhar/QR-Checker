function doGet(e) {
  // 1) Open your spreadsheet by ID
  var ss = SpreadsheetApp.openById("Your google sheets path");
  
  // 2) Specify the sheet name, or use getActiveSheet() if there's only one
  var dataSheet = ss.getSheetByName("Token"); 
  if (!dataSheet) {
    // If no sheet with that name, fallback to active sheet
    dataSheet = ss.getActiveSheet();
  }

  // 3) Get the token from the URL (e.g., ?token=1AA)
  var token = e.parameter.token;
  if (!token) {
    return HtmlService.createHtmlOutput(
      "<div style='text-align:center; font-size:40px;'>Error: No token provided.</div>"
    );
  }

  // 4) Get the last row of data
  var lastRow = dataSheet.getLastRow();

  // 5) Loop through each row (starting at row 2, assuming row 1 is headers)
  for (var i = 2; i <= lastRow; i++) {
    var tokenNumber = dataSheet.getRange(i, 1).getValue();  // Column A
    var tokenID = dataSheet.getRange(i, 2).getValue();      // Column B
    var isActive = dataSheet.getRange(i, 3).getValue();     // Column C
    var scanCount = dataSheet.getRange(i, 4).getValue();    // Column D

    // Convert scanCount to a number (default to 0 if blank)
    scanCount = Number(scanCount) || 0;

    // Construct the token string (e.g., "1" + "AA" => "1AA")
    var currentToken = String(tokenNumber) + String(tokenID);

    // 6) Check if the current row matches the scanned token
    if (currentToken === token) {
      // FIRST SCAN: Token not active and scan count is 0
      if (!isActive && scanCount === 0) {
        // Activate token and set scan count to 1
        dataSheet.getRange(i, 3).setValue(true);
        dataSheet.getRange(i, 4).setValue(1);

        // Return success message in big, centered text with the token number
        return HtmlService.createHtmlOutput(
          "<div style='text-align:center; font-size:40px;'>" +
            "Success! Token marked as taken.<br>" +
            "Token Number: " + tokenNumber +
          "</div>"
        );
      }
      // SECOND SCAN: Already active and scan count is 1
      else if (isActive && scanCount === 1) {
        // Increment scan count to 2
        dataSheet.getRange(i, 4).setValue(2);

        // Return "already used" error
        return HtmlService.createHtmlOutput(
          "<div style='text-align:center; font-size:40px;'>" +
            "Error: Token already used." +
          "</div>"
        );
      }
      // THIRD OR MORE SCANS: Token expired
      else {
        return HtmlService.createHtmlOutput(
          "<div style='text-align:center; font-size:40px;'>" +
            "Error: Token expired." +
          "</div>"
        );
      }
    }
  }

  // If no row matches the token
  return HtmlService.createHtmlOutput(
    "<div style='text-align:center; font-size:40px;'>" +
      "Error: Token not found." +
    "</div>"
  );
}
