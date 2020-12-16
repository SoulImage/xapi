//Variables
var name = "James Wentworth"
var email = "table1235@gmail.com"


function pageLoaded(){
    // Code goes here
}

function sendOverStatement(){
	var statement = {
		"actor": {
			"mbox": "mailto:" + email,
			"name": name,
			"objectType": "Agent"
		},
		"Verb": {
			"id": "http://adlnet.gov/expapi/verbs/interacted",
			"display": {"en-US": "interacted"}
		},
		"Object": {
			"id": "http:testing.net"
			"definition": {
				"name": {"en-US": "Simple button example"},
				"description": {"en-US": "Simple button example xAPI Button"}
			},
			"objectType": "Activity"
		}

	}
	alert("Statement has been sent over.")
	ADL.XAPIWRAPPER.sendStatement(statement)
}

//On Blur Events
function saveName() {
	name = document.getElementById('nameEntered').value;
}

function saveEmail() {
	email = document.getElementById('userEmail').value;
}
