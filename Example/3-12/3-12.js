function mouseEnterMsg () {
	alert('Mouse event!');
};

window.onload = function() {
	var em = document.querySelector('body');
	em.addEventListener('click', function() {
		alert('Clicked');
	});
	em.addEventListener('mouseenter', mouseEnterMsg);
	em.addEventListener('mouseleave', mouseEnterMsg);
	em.removeEventListener('mouseleave');
};