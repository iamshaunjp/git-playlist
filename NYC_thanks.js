

// prints thanks a bunch of times
var howManyThanks = prompt('How many Thanks do you want to see, today?');
(function (numberOfThanks) {
	var docQuery = document.querySelector('#ninjaCode');
	for (i = 0; i < numberOfThanks; i++) {
		docQuery.innerHTML += 'Thanks For the youtube video! ( From New York City )' + '<br>';
	}
})(howManyThanks);

