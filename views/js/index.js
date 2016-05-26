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

$('#leader_board').on('click',function() {    
  window.scrollTo(0, 1300); 
});

$('#about').on('click',function() {    
  window.scrollTo(0, 2300); 
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
    var usersRef = ref.child("users");
    var userRef = usersRef.child(authData.uid);
    userRef.set({
    email: authData.google.email,
    full_name: authData.google.displayName,
    profile_pic: authData.google.profileImageURL
    });
    
    localStorage.full_name = authData.google.displayName;
    localStorage.profile_pic = authData.google.profileImageURL;
    window.location.href = "/type.html";
 }
  
 }, {
  remember: "sessionOnly",
  scope: "email"
});

});  

});

