$(document ).ready(function() {

var name = document.getElementById('full_name'),
pic = document.getElementById('profile_pic'),
time_count = document.getElementById('time_count'),
seconds = 0, minutes = 0, hours = 0, t;


name.textContent = localStorage.full_name;
pic.src = localStorage.profile_pic;
pic.height = 102;
pic.width = 102;

localStorage.removeItem("full_name");
localStorage.removeItem("profile_pic");


$('#start_submit').on('click',function() {
    
  timer();

});


function timer() {
    t = setTimeout(add, 1000);
}

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    time_count.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
  }


/*
// Stop button 
stop.onclick = function() {
    clearTimeout(t);
}

// Clear button 
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
} */


});
