console.log('Loaded!');
contador = 36;

var elm = document.querySelector('#scroll');
addEventListener('scroll', function () {
	if ((window.innerHeight + window.scrollY) >= elm.offsetHeight) {
		this.contador++;
		pintaLista();
	}
});

pintaLista = () => {
	document.querySelector('#scroll').innerHTML = '';
	for (let i = 0; i <= contador; i++) {
		el = document.createElement('li');
		el.classList.add('list-group-item');
		el.classList.add('list-group-item-ation');
		el.textContent = `Numero ${i}`;
		document.querySelector('#scroll').appendChild(el);
	}
}

pintaLista();

