$( document ).ready(function() {


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 55) {
        $("#header").addClass("scrolling");
        $("#nav a").addClass("scrolling");
    } else {
        $("#header").removeClass("scrolling");
        $("#nav a").removeClass("scrolling");
    }
});

    

// When the user clicks the button, open the modal 
$('#modal_trigger').on('click',function() {

// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

modal.style.display = "block";

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


$('#google_login').on('click',function() {
  
var ref = new Firebase("https://flickering-inferno-1776.firebaseio.com");
ref.authWithOAuthPopup("google", function(error, authData) { 
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
  
 }, {
  remember: "sessionOnly",
  scope: "email"
});

});  



});

