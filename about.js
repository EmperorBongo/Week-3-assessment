console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Hey Friend its Joey, Your form has been submitted:)');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit)

function displayCompliment() {
	alert("Joey the space cat wants to give you a compliment you today.")
}

const catImage = document.getElementById('catImage')
catImage.addEventListener('mouseover', displayCompliment)