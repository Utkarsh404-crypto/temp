// let image = document.getElementById('post')
// image.addEventListener('click', (e) => {
//     console.log('clicked');
//     e.preventDefault()
//     let image = document.getElementById('post')

//     image.innerHTML = `<div id="popUpOverlay"></div>

//     <div id="popUpBox">

//     <div id="box">

//     <i class="fas fa-check-circle fa-5x"></i>

//     <h1>Here Goes Your Popup</h1>

//     <div id="closeModal"></div>

//     </div>

//     </div>

//     <button onclick="Alert.render('You look very pretty today.')" class="btn">Show Alert</button>`

//     console.log(image);


// })

// function onclicks() {

// }

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}