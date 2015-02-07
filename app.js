/**
 * Created by Martin on 07/02/15.
 */

// This is used by the web server Express

function isEmptyStr(str) {
    return (!str || 0 === str.length);
}

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv = require('ya-csv');

var app = express();

app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/hello", function(request, response) {
   response.sendFile(path.join(__dirname, "Welcome.html"));
});

app.post("/booking", function(request, response) {
    // response.send("Name: " + request.body.fullName);
    var fullName = request.body.fullName;  // get the name text box contents from the form

    if (isEmptyStr(fullName)) {
        response.send("Please enter a name to make a booking.");
    }

    var emailAddr = request.body.emailAddress; // get the email text entered from the form

    // Open and append into file 'booking.csv'
    var database = csv.createCsvFileWriter("bookings.csv", {"flags": "a"});

    // construct the data array as required e.g: the name followed by the email text
    var userData = [fullName, emailAddr] ;

    // write the array to bookings.csv
    database.writeRecord(userData);
    database.writeStream.end; // close teh file

    // Display confirmation text to user
    response.send("Thanks " + fullName + ", your booking is confirmed.");
});

var server = app.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Martin's Pizza Oven web app listening at http://%s:%s", host, port);
});