// Variables
var name = "Sammy McGee";
var email = "jeffbatt@gmail.com"

// Page Load Function
function pageLoaded(){
	// Connecting to LRS
	var conf = {
	  "endpoint" : "https://cloud.scorm.com/tc/CJ0NK8AJKV/sandbox/",
	  "auth" : "Basic " + toBase64('jeffbatt@gmail.com:DevLearn17'),
	};
	ADL.XAPIWrapper.changeConfig(conf);
}

// Button click
function sendStatement(){
	var statement = {  
	    "actor": {  
	        "mbox": "mailto:"+email,  
	        "name": name,  
	        "objectType": "Agent"  
	    },  
	    "verb": {  
	        "id": "http://adlnet.gov/expapi/verbs/interacted",  
	        "display": {"en-US": "interacted"}  
	    },  
	    "object": {  
	        "id": "http://learningdojo.net/xapi/simple_button",  
	        "definition": {  
	            "name": {"en-US": "Simple button example"},  
	            "description": {"en-US": "Simple button example xAPI Button"}  
	        },  
	        "objectType": "Activity"  
	    }  
	};

	ADL.XAPIWrapper.sendStatement(statement); 

	// Alert message
	alert('Statement has been sent!')

}

// On Blur Events
function saveName(){
	name = document.getElementById('nameEntered').value;
	console.log(name);
}

function saveEmail(){
	email = document.getElementById('userEmail').value;
	console.log(email)
}
