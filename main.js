window.onload = function() { 
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

    var playerX = width/2,
    playerY = height/2;

    
    update();
    
    function getKeyAndMove(e) {
        var key_code = e.which || e.keyCode;
        switch (key_code) {
            case 37: //left arrow key
                playerX -= 5;
                break;
            case 38: //Up arrow key
                playerY -= 5;
                break;
            case 39: //right arrow key
                playerX += 5;
                break;
            case 40: //down arrow key
                playerY += 5;
                break;
        }
    }

    function update(){
        context.clearRect(0,0,width,height);

        context.beginPath();
        context.arc(playerX, playerY, 20, 0, Math.PI * 2, false);
        context.fill();

        requestAnimationFrame(update);
    }
}