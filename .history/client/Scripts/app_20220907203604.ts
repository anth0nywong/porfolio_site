/* File name: Assignment2
Student Name : Hok Hei Wong
StudentID : 301193519
Date: June 20, 2022*/


//IIFE immediately invoked function expression
//This is only for testing whether client side script is working
(function()
{
    function Start()
    {
        console.log("App Stated!");
        //use AJAX to read JSON file
        let XHR = new XMLHttpRequest();
        // create the request
        XHR.open("GET", "../data/data.json");
        //send the request
        XHR.send();
        //create an event listener/handler
        XHR.addEventListener("readystatechange", function(event)
        {
            if(XHR.readyState == 4 && XHR.status == 200)
            {
                console.log("JSON Data:")
                console.log("=========================")
                console.log(JSON.stringify(XHR.responseText));
            }
        })

        
    }

    window.addEventListener("load", Start);
}
)();

$('#contactForm').submit(function(){
    $(this).find(':input[type=submit]').prop('disabled', true);
    return false;
});

const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
let idle = 0;

var idleInterval = setInterval(timerIncrement, 1000);
function timerIncrement() {
    idle = idle + 1;
    if (idle > 2) { // 2 seconds idle
        body.classList.remove(scrollUp);
        body.classList.remove(scrollDown);
    }
}

window.addEventListener("scroll", () => {
    idle = 0;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
   
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });