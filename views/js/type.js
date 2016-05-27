$(document ).ready(function() {

var name = document.getElementById('full_name'),
pic = document.getElementById('profile_pic');
name.textContent = localStorage.full_name;
pic.src = localStorage.profile_pic;
pic.height = 102;
pic.width = 102;

/*localStorage.removeItem("full_name");
localStorage.removeItem("profile_pic");*/

 var oneMinute = 60,
 timer_display = document.getElementById('time_count'),
 text_output = document.getElementById('text_output'),
 text_input = document.getElementById('text_input'),
 modal = document.getElementById('result_modal'),
 result_name = document.getElementById('result_full_name'),
 result_pic = document.getElementById('result_profile_pic'),
 result_speed = document.getElementById('result_speed'),speed;
 
  
startTimer(oneMinute, timer_display);
  
$('#result_save').on('click',function() { 
    var ref = new Firebase("https://flickering-inferno-1776.firebaseio.com/users");
    var uidRef = ref.child(localStorage.userRef);
    uidRef.update({
     "speed": speed
    });
});


function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
        
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            //start = Date.now() + 1000;
            showScore();
            
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

function processScore() {
  var output_len = output.length,
  input_len = input.length;
}

function showScore() {
  
  result_name.textContent = localStorage.full_name;
  result_pic.src = localStorage.profile_pic;
  result_pic.height = 102;
  result_pic.width = 102;
  
  output = text_input.value,
  input = text_input.value;
  
  speed = input.replace(/  /g," ").split(" ").length;//Math.round(((input.replace(/  /g," ").split(" ").length)/3) * 60);
  result_speed.textContent = "speed: "+speed+" wpm";
                  
  modal.style.display = "block";
  
}
   
  
   
});
