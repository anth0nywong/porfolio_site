"use strict";
(function () {
    function Start() {
        console.log("App Stated!");
        let XHR = new XMLHttpRequest();
        XHR.open("GET", "../data/data.json");
        XHR.send();
        XHR.addEventListener("readystatechange", function (event) {
            if (XHR.readyState == 4 && XHR.status == 200) {
                console.log("JSON Data:");
                console.log("=========================");
                console.log(JSON.stringify(XHR.responseText));
            }
        });
    }
    window.addEventListener("load", Start);
})();
$('#contactForm').submit(function () {
    $(this).find(':input[type=submit]').prop('disabled', true);
    return false;
});
//# sourceMappingURL=app.js.map