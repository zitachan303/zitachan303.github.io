window.onload = function() {
	//$ = jQuery
	document.querySelectorAll('body > p:last-of-type');
	$('body > p:last-of-type');

	var ems = $ ('body > p'); //body 裡的所有p
	console.log(ems[0].innerHTML);

	console.log($('body > p').eq(0).html()); //eq=equal to (從html把所有p拿出來, 再把=0的拿出來)
	console.log($('body > p').eq(-1).html()); //-1倒數第1個

	$('body > p').eq(1).html('Changed!');

	console.log ($('body > p.special').eq(1).html());
};