
(function(){
// This part checks for jQuery
var version = "1.10.2";
// Checks for prior inclusion and version
if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
        // If there isn't an instance of jQuery, create one and append it to the head
        // Else run our bookmarklet!
        var done = false;
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + version + "/jquery.min.js";
        script.onload = script.onreadystatechange = function(){
                if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                        done = true;
                        initBookmarklet(window.jQuery);
                }
    else {
        console.log('error loading');
    }
        };
        document.getElementsByTagName("head")[0].appendChild(script);
if (window.jQuery === undefined || window.jQuery.fn.jquery < version) {
    console.log(':::');
}
else {
    console.log('jquery loaded');
}
} else {
        initBookmarklet(window.jQuery);
}
function initBookmarklet($) {
        (window.bookmarklet = function() {
                // Replace this section with your own Information Overlay script
                var delay = 300; //Delay in milliseconds
                console.log(delay);
                // Arrays
                // Function to randomly select a string from "myImageArray"
                function updateshadow() {
                  var time = new Date();
                  var hours = time.getHours();
                  var minutes = time.getMinutes();
                  var seconds = time.getSeconds();
                  console.log(time.getSeconds());
                  console.log(time);
                  console.log("Hour: " + hours);
                  // Get current time;
                  // Check what hour it is
                  if (hours <= 6){
                    console.log("Good night");
                   $("*").css("background", "black");
                  }
                  if (hours == 7){
                    console.log("Morning. It's seven o'clock");
                    $("*").css("box-shadow", "150px 100px " + seconds + "px 50px rgba(0,0,0,0.75)");
                    //$("*").css("box-shadow",  hours + "px 100px 70px 50px rgba(0,0,0,0.75)");
                  }

                  if (hours == 8){
                    console.log("Morning. It's eight o'clock");
                    $("*").css("box-shadow", "120px 80px " + seconds + "px 40px rgba(0,0,0,0.75)");
                  }

                  if (hours == 9){
                    console.log("Morning. It's nine o'clock");
                    $("*").css("box-shadow", "100px 60px " + seconds + "px 30px rgba(0,0,0,0.75)");
                  }

                  if (hours == 10){
                    console.log("Morning. It's ten o'clock");
                    $("*").css("box-shadow", "80px 40px " + seconds + "px 20px rgba(0,0,0,0.75)");
                  }

                  if (hours == 11){
                    console.log("Morning. It's eleven o'clock");
                    $("*").css("box-shadow", "60px 20px " + seconds + "px 10px rgba(0,0,0,0.75)");
                  }

                  if (hours == 12){
                    console.log("Morning. It's twleve o'clock");
                    $("*").css("box-shadow", "0px 1px " + seconds + "px 10px rgba(0,0,0,0.75)");
                  }

                  if (hours == 13) {
                    console.log("Hello!");
                    $("*").css("box-shadow", "-20px 11px " + seconds + "px 10px rgba(0,0,0,0.75)");
                  }

                  if (hours == 14) {
                    console.log("It's two o'clock");
                    //$("*").css("box-shadow",  hours + "px " + seconds + "px 70px 50px rgba(0,0,0,0.75)");
                    //$("*").css("box-shadow",  seconds + "px " + minutes + "px 70px 50px rgba(0,0,0,0.75)");
                    $("*").css("box-shadow", "-40px 31px " + seconds + "px 15px rgba(0,0,0,0.75)");
                    //$("*").css("box-shadow", "-40px 31px 30px 15px rgba(0,0,0,0.75)");
                   }

                  if (hours == 15){
                    console.log("It's three o'clock");
                    $("*").css("box-shadow", "-60px 46px " + seconds + "px 20px rgba(0,0,0,0.75)");
                  }

                  if (hours == 16){
                    console.log("It's four o'clock");
                    $("*").css("box-shadow", "-100px 55px " + seconds + "px 30px rgba(0,0,0,0.75)");
                  }

                  if (hours == 17){
                    console.log("It's five o'clock");
                    $("*").css("box-shadow", "-120px 60px " + seconds + "px 35px rgba(0,0,0,0.75)");
                  }

                  if (hours == 18){
                    console.log("It's six o'clock");
                    $("*").css("box-shadow", "-140px 65px " + seconds + "px 40px rgba(0,0,0,0.75)");
                  }
                  // If it's a certain hour, match the shadow to it.
                  if (hours >= 19){
                    console.log("Good night");
                   $("*").css("background", "black");
                  }
        }();
        // Execute randomizer functions with delay
        setInterval(function() {
            updateshadow();
        }, delay);
})}
})();
