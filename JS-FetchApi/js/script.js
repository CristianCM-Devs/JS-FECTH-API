/*
	Leer un archivo:

	var contenido = document.querySelector('#contenido')
	function traer(){
	fetch('texto.txt')
	.then(data => data.text())
	.then(data => {
		contenido.innerHTML = `<p>${data}</p>`;
	})
}

	Consumieremos el api https://randomuser.me/api/
*/

var contenido = document.querySelector('#contenido')
	
function traer(){
	fetch('https://randomuser.me/api/')
	.then(res => res.json())
	.then(data => {
		console.log(data.results['0'].email)
		contenido.innerHTML = `
		<img src="${data.results['0'].picture.large}" alt="" width="100px" class="img-fluid rounded-circle">
        <p>Nombre: ${data.results['0'].name.last}</p>
        `
	})
}