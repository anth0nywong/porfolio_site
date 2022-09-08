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

var scrolling = false;
   $(window).on('scroll', function(){
      if( !scrolling ) {
         scrolling = true;
         (!window.requestAnimationFrame)
            ? setTimeout(autoHideHeader, 250)
            : requestAnimationFrame(autoHideHeader);
      }
});

