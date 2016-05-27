$(document).ready(function () {

  //variable initialization
  var first_img = document.getElementById('1st_img'),
    first_name = document.getElementById('1st_name'),
    first_score = document.getElementById('1st_score'),
    second_img = document.getElementById('2nd_img'),
    second_name = document.getElementById('2nd_name'),
    second_score = document.getElementById('2nd_score'),
    third_img = document.getElementById('3rd_img'),
    third_name = document.getElementById('3rd_name'),
    third_score = document.getElementById('3rd_score');


  var userRef = new Firebase("https://flickering-inferno-1776.firebaseio.com/users");
  userRef.on("value", function (snapshot) {
    
    for (variable in object) {
    }

    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

 
  //on window scroll
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 55) {
      $("#header").addClass("scrolling");
      $("#nav a").addClass("scrolling");
    } else {
      $("#header").removeClass("scrolling");
      $("#nav a").removeClass("scrolling");
    }
  });

  //leaderboard tab button click
  $('#leader_board').on('click', function () {
    window.scrollTo(0, 1300);
  });

  //about tab button click
  $('#about').on('click', function () {
    window.scrollTo(0, 2300);
  });


  // When the user clicks the button, open the modal 
  $('#modal_trigger').on('click', function () {

    // Get the modal
    var modal = document.getElementById('myModal');
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

  });

  //login with google button
  $('#google_login').on('click', function () {

    var ref = new Firebase("https://flickering-inferno-1776.firebaseio.com");

    ref.authWithOAuthPopup("google", function (error, authData) {
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

        localStorage.userRef = authData.uid;
        localStorage.full_name = authData.google.displayName;
        localStorage.profile_pic = authData.google.profileImageURL;
        window.location.href = "/type";
      }

    }, {
        remember: "sessionOnly",
        scope: "email"
      });

  });

});

