
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

        
    }



    initiliseCanvasContext();
    MainLoop();

}
window.addEventListener('load', onLoad, false);


