console.log('helloworld')

function displayButtons() {
    const colorButton = document.getElementById('colorButton')
    const favPlaceButton = document.getElementById('favPlaceButton')
    const favRitualButton = document.getElementById('favRitualButton')

    colorButton.addEventListener('click', function() {
        alert("My favorite color is blue!")
    })

    favPlaceButton.addEventListener('click', function() {
        alert("My favorite place is the beach!")
    })

    favRitualButton.addEventListener('click', function() {
        alert("My favorite ritual is the fighting ritual in the movie Hot Rod.")
    });
}

document.addEventListener('DOMContentLoaded', displayButtons);