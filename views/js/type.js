$(document).ready(function () {

    //variable initialization
    var name = document.getElementById('full_name'),
        pic = document.getElementById('profile_pic');
    name.textContent = localStorage.full_name;
    pic.src = localStorage.profile_pic;
    pic.height = 102;
    pic.width = 102;

    var oneMinute = 60,
        timer_display = document.getElementById('time_count'),
        text_output = document.getElementById('text_output'),
        text_input = document.getElementById('text_input'),
        modal = document.getElementById('result_modal'),
        result_name = document.getElementById('result_full_name'),
        result_pic = document.getElementById('result_profile_pic'),
        result_speed = document.getElementById('result_speed'), speed,
        speed = 0;

    //Array of sample text
    var strToTest = new Array("Innovative Technical Solutions, LLC (ITS) is a Native" +
        " American owned business that was established in Paducah, " +
        "Kentucky in April 2000. ITS is a certified and Small Disadvantaged " +
        "Business by the U.S. Small Business Administration. Our headquarters " +
        "are in Paducah, Kentucky and we have" +
        " satellite offices located in Tennessee, " +
        "Ohio, and Illinois. ITS is a leading" +
        " edge Information Technology firm that " +
        "is comprised of professionals with a broad" +
        " range of experience in software " +
        "development, high-speed imaging/scanning (TIFF, PDF, Text, " +
        "and OCR capabilities), document management, records management," +
        " relevance management, information security, environmental " +
        "management, fire services management, fire protection " +
        "engineering, and protective force expertise.",
        "The ITS Information Technology (IT) Team are experts " +
        "in the identification, capture, indexing, microfilming, imaging, " +
        "disposition, turnover, storage, and retrieval of records, " +
        "and in the administration of records management databases. " +
        "The types of records we have extensive experience in managing " +
        "include waste management, hazardous waste, waste shipment, " +
        "environmental compliance, environmental" +
        " monitoring, feasibility studies, " +
        "environmental work plans, cleanup actions, cemetery records, and " +
        "various Federal laws such as CERCLA, Paper Reduction,");

    //load text to view              
    text_output.textContent = strToTest;

    //start timer
    startTimer(oneMinute, timer_display);

    //click save button  
    $('#result_save').on('click', function () {
        var ref = new Firebase("https://flickering-inferno-1776.firebaseio.com/users");
        var uidRef = ref.child(localStorage.userRef);
        uidRef.update({
            "speed": speed
        });
        window.location.href = "/";
    });

    //timer function
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

    //prepare and display result dialog 
    function showScore() {

        result_name.textContent = localStorage.full_name;
        result_pic.src = localStorage.profile_pic;
        result_pic.height = 102;
        result_pic.width = 102;

        input = text_input.value.trim();

        speed = input.replace(/  /g, " ").split(" ").length;
        result_speed.textContent = "speed: " + speed + " wpm";

        timer_display.style.visibility = 'hidden';
        modal.style.display = "block";


    }



});
