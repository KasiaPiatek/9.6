var add = document.getElementById("addElem");

var list = document.getElementById('list');

add.addEventListener('click', function(){
	var element = document.createElement('li');

	element.innerHTML = 'item ' + document.getElementsByTagName('li').length;

	list.appendChild(element);
});


