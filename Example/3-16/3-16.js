function changeAllBgs () {
	var targets = document.getElementsByTagName('div');
	for(var index = 0 ; index < targets.length ; index++){
		var div = targets[index];
		if(div.id !== 'noChange') {
			div.style.backgroundColor = 'green';

		}

	}
}


window.onload = function(){
	//for(loop variable ; loop condition ; loop action)
	//counter++ -> counter = counter + 1
	/*for(var counter = 1 ; counter <= 10 ; counter++) {
		console.log(counter);
	}*/
	//Infinite loop !!! dangerous!!!
	/*for(var counter = 1 ; counter <= 10 ;) {
		console.log(counter);
	}*/
	//Infinite loop !!! dangerous!!!
	/*var counterB = 100;
	for(var counter = 1 ; counter <= 10 ; counter++){
	}*/
	var button = document.getElementById('changeAll');
	button.addEventListener('click', changeAllBgs);
};