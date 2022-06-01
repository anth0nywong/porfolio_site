

//IIFE immediately invoked function expression
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