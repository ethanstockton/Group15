
//the window load event handler
function onLoad() {
    

    var lastTime = Date.now();

    function MainLoop() {
        var thisTime = Date.now();
        var deltaTime = thisTime - lastTime;
        //30 fps
        if (deltaTime >= 30) {
            MainLoop2(deltaTime);
            lastTime = thisTime;
        }
        requestAnimationFrame(MainLoop);
        

    }


    function MainLoop2(pDeltaTime) {
        //load objects then run the main thread

        //fetch the info for login when ready, then check with the sqllite database if it is a user, then log them in, 
        //if they need to create one get the info then create a new user in the data base



        //once logged in fetch the map data for hull, and display it on the map, also unload the login screen so the user can see it



        
    }



    initiliseCanvasContext();
    MainLoop();

}
window.addEventListener('load', onLoad, false);


