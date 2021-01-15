function changeBg () {
	var em = document.getElementById('item1');
	em.style.backgroundColor = 'blue';
	em = document.getElementById('item2');
	em.style.backgroundColor = 'red';
}

function changeBg1 () {
	var em = document.getElementById('item2');
	em.style.backgroundColor = 'orange';
	em = document.getElementById('item3');
	em.style.backgroundColor = 'red';
}

window.onload = function () {
	var em = document.getElementById('switch12');
	em.addEventListener('click', changeBg);
	em = document.getElementById('switch23');
	em.addEventListener('click', changeBg1);
}