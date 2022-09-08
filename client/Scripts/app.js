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
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
let idle = 0;
var idleInterval = setInterval(timerIncrement, 500);
function timerIncrement() {
    idle = idle + 1;
    if (idle > 2) {
        body.classList.add(scrollUp);
        body.classList.remove(scrollDown);
    }
}
window.addEventListener("scroll", (event) => {
    var element = event.target;
    idle = 0;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    }
    else if (currentScroll < lastScroll &&
        body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});
//# sourceMappingURL=app.js.map