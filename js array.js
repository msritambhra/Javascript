var fruits = [ "Mango" , "Banana" , "Lichi" , "Apple"]; 

function getFruits(){

	document.getElementById('fruits').innerHTML = fruits;

}

function myFunction(){
	 var nf = prompt("What is your favourite fruit ? ") ;

	 fruits.push(nf);

	 document.getElementById('fruits').innerHTML = fruits;

}

