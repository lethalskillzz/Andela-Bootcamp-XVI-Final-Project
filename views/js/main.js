$( document ).ready(function() {

// Get the modal
var modal = document.getElementById('myModal');
// Get the <href> element that opens the modal
var login = document.getElementsByClassName("button big alt")[0];
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
login.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


});

