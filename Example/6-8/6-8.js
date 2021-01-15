$(document).ready(function() {
	slideUpTArget();
	$(document). on('scroll', function() {
		slideUpTArget();
	});
});

function slideUpTArget() {
	var divs = $('div');
	var vh = $(document).height();
	var scrollTop = $(window).scrollTop();
	divs.each(function() {
		var divTop = $(this).offset().top;
		if(vh + scrollTop > divTop) {
			$(this).animate({top: 0, opacity: 1}, 1000);
		}
	});
};