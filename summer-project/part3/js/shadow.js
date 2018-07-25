
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
                $("*").css({
                  "-webkit-box-shadow" : "0px 10px 30px 6px rgba(0,0,0,0.75)",
                  "-moz-box-shadow" : "0px 10px 30px 6px rgba(0,0,0,0.75)",
                  "box-shadow" : "0px 10px 30px 6px rgba(0,0,0,0.75);"})
        })();
}
})();
