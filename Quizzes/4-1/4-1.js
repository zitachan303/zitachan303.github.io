$(document).ready(function () {
	$('button').eq(0).on('click', function () {
		$('div').removeClass('selected');
		$('div:nth-of-type(odd)').addClass('selected');
	});
	$('button').eq(1).on('click',function () {
		$('div').removeClass('selected');
		$('div:nth-of-type(even)').addClass('selected');
	});
	$('button').eq(0).on('click',function () {
		$('div').removeClass('selected');
		
	});
			
});
		