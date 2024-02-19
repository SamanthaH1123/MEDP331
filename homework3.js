(function(){
let location = document.getElementById("location");
location.addEventListener('click', function() {
	const userInput = prompt("Type a location.");
	if (userInput) {
		let replace1 = document.getElementById("replace1");
		let question = replace1.location;
		let locationResponse = document.createTextNode(userInput);
		replace1.replaceChildren( locationResponse, location );
	}
	location.remove();
	});

let number = document.getElementById("number");
number.addEventListener('click', function() {
	const userInput = prompt("Type a number.");
	if (userInput) {
		let replace2 = document.getElementById("replace2");
		let question = replace2.number;
		let numberResponse = document.createTextNode(userInput);
		replace2.replaceChildren( numberResponse, number );
	}
	number.remove();
	});

let adjective = document.getElementById("adjective");
adjective.addEventListener('click', function() {
	const userInput = prompt("Type an adjective.");
	if (userInput) {
		let replace3 = document.getElementById("replace3");
		let question = replace3.adjective;
		let adjectiveResponse = document.createTextNode(userInput);
		replace3.replaceChildren( adjectiveResponse, adjective );
	}
	adjective.remove();
	});

let vehicle = document.getElementById("vehicle");
vehicle.addEventListener('click', function() {
	const userInput = prompt("Type a vehicle.");
	if (userInput) {
		let replace4 = document.getElementById("replace4");
		let question = replace4.vehicle;
		let vehicleResponse = document.createTextNode(userInput);
		replace4.replaceChildren( vehicleResponse, vehicle );
	}
	vehicle.remove();
	});

let clothing1 = document.getElementById("clothing1");
clothing1.addEventListener('click', function() {
	const userInput = prompt("Type an article of clothing (plural).");
	if (userInput) {
		let replace5 = document.getElementById("replace5");
		let question = replace5.clothing1;
		let clothing1Response = document.createTextNode(userInput);
		replace5.replaceChildren( clothing1Response, clothing1 );
	}
	clothing1.remove();
	});

let clothing2 = document.getElementById("clothing2");
clothing2.addEventListener('click', function() {
	const userInput = prompt("Type an article of clothing (plural).");
	if (userInput) {
		let replace6 = document.getElementById("replace6");
		let question = replace6.clothing2;
		let clothing2Response = document.createTextNode(userInput);
		replace6.replaceChildren( clothing2Response, clothing2 );
	}
	clothing2.remove();
	});

let clothing3 = document.getElementById("clothing3");
clothing3.addEventListener('click', function() {
	const userInput = prompt("Type an article of clothing (singular).");
	if (userInput) {
		let replace7 = document.getElementById("replace7");
		let question = replace7.clothing3;
		let clothing3Response = document.createTextNode(userInput);
		replace7.replaceChildren( clothing3Response, clothing3 );
	}
	clothing3.remove();
	});

let verb1 = document.getElementById("verb1");
verb1.addEventListener('click', function() {
	const userInput = prompt("Type a verb.");
	if (userInput) {
		let replace8 = document.getElementById("replace8");
		let question = replace8.verb1;
		let verb1Response = document.createTextNode(userInput);
		replace8.replaceChildren( verb1Response, verb1 );
	}
	verb1.remove();
	});

let verb2 = document.getElementById("verb2");
verb2.addEventListener('click', function() {
	const userInput = prompt("Type a verb.");
	if (userInput) {
		let replace9 = document.getElementById("replace9");
		let question = replace9.verb2;
		let verb2Response = document.createTextNode(userInput);
		replace9.replaceChildren( verb2Response, verb2 );
	}
	verb2.remove();
	});

let noun = document.getElementById("noun");
noun.addEventListener('click', function() {
	const userInput = prompt("Type a verb.");
	if (userInput) {
		let replace10 = document.getElementById("replace10");
		let question = replace10.noun;
		let nounResponse = document.createTextNode(userInput);
		replace10.replaceChildren( nounResponse, noun );
	}
	noun.remove();
	});

let verb3 = document.getElementById("verb3");
verb3.addEventListener('click', function() {
	const userInput = prompt("Type a verb.");
	if (userInput) {
		let replace11 = document.getElementById("replace11");
		let question = replace11.verb3;
		let verb3Response = document.createTextNode(userInput);
		replace11.replaceChildren( verb3Response, verb3 );
	}
	verb3.remove();
	});

let adjectiveed = document.getElementById("adjectiveed");
adjectiveed.addEventListener('click', function() {
	const userInput = prompt("Type a verb.");
	if (userInput) {
		let replace12 = document.getElementById("replace12");
		let question = replace12.adjectiveed;
		let adjectiveedResponse = document.createTextNode(userInput);
		replace12.replaceChildren( adjectiveedResponse, adjectiveed );
	}
	adjectiveed.remove();
	});

}());