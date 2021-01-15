$(document).ready(function() {
	$('#hideDiv').on('click', function() {
		$('div').hide('fast'); //hide(1000) 1000=1s 以ms為單位//
	});
	$('#showDiv').on('click', function() {
		$('div').show('slow');
	});
});