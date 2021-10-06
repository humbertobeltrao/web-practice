var animal = {
	cor  : 'preto',
	idade : 2,
	especie : 'gato',
	likes : ['peixe', 'ração'],
	dislikes : ['carne', 'frango'],
	comer() {
		console.log('o '+this.especie+' esta se alimentando')
		this.likes.forEach(comida => {
			console.log(comida)
		})
	}
}
//console.log(typeof animal)
//animal.comer();

$(function(){
	$("button").click(function(){
		alert('Opa');
	});
});


var animais = [
	{
		cor  : 'preto', 
		idade : 2, 
		especie : 'gato',
		likes : ['peixe', 'ração']
	},
	{
		cor  : 'cinza',
		idade : 5,
		especie : 'cachorro',
		likes : ['ração', 'carne']
	},
	{
		cor  : 'preto',
		idade : 4,
		especie : 'cachorro',
		likes : ['frango', 'ração']
	}
]




function iniciaAjax() {
	var objetoAjax;
	if(window.XMLHttpRequest) {
		objetoAjax = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		try {
			objetoAjax = new ActiveXObject('Msxml2.XMLHTTP');
		} catch (e) {
			try {
				objetoAjax = new ActiveXObject('Microsoft.XMLHTTP');
			} catch (ex) {
				objetoAjax = false;
			}
		}
	}
	return objetoAjax;
}

var reqAjax = iniciaAjax()
if(reqAjax) {
	reqAjax.onreadystatechange = function() {
		if(reqAjax.readyState == 4) {
			if(reqAjax.status == 200) {
				 	var arr = reqAjax.responseXML;
				 	//document.getElementById('imagem').src = arr[4].picture;
				 	document.getElementById('div1').innerHTML = arr.getElementsByTagName('author');
					/*for(var i = 0; i < arr.length; i++) {
						document.getElementById('paragrafo').innerHTML += arr[i].name + "<br>";
					}*/
			}
		}
	};

	reqAjax.open('GET', 'books.xml');
	//reqAjax.setRequestHeader("Content-Type",  "application/xml");
	reqAjax.send();
}