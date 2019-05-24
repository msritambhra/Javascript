function update(element){

	var newurl = element.src;


	document.getElementById('image').style.backgroundColor = "RED" ;
	document.getElementById('image').innerHTML = element.alt;

	

}


function unDo(){

	document.getElementById('image').innerHTML = " Hover over this to change the image" ;
	document.getElementById('image').style.backgroundColor = "WHITE" ;

}