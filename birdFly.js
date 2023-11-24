let canva = document.getElementById("canvas");
let cx = canva.getContext("2d");
let img = new Image();
img.src = "flappy-bird2.png";
let x = 0, y=0, wing = 0, mirror = 0;
let t;
let width, height;
let destX, destY;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    destX = width / 2;
    destY = height / 2;
}

img.addEventListener("load", function () {
    resizeCanvas();
    drawBird();
    setInterval(birdFly, 3000);
});

window.addEventListener("resize", function () {
    resizeCanvas();
    drawBird();
});

function drawBird() {
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, wing * 75, mirror + 0, 75, 50, destX, destY, 75, 50);
    wing === 7 ? (wing = 0) : wing++;
}

function birdFly() {
    let newD = Math.floor(Math.random()*4);

    //cx.clearRect(0, 0, 800, 800);
    clearInterval(t);
    switch(newD){
        case 0:
            //bird goes to right
            flyToRight();
            break;
        case 1:
            //bird goes to left
            flyToLeft();
            break;
        case 2:
            //bird goes up
            flyUp();
            break;
        case 3:
            //bird goes down
            flyDown();
    }
}

    function flyToRight(){
        t = setInterval(function(){
            if (destX >= 725){birdFly();}
            else{
            cx.clearRect(0, 0, width, height);
            mirror = 0;
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX += 10, destY, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
        }, 60);
    }
    function flyToLeft(){
        t = setInterval(function(){
            if (destX<=0){birdFly();}
            else{
            cx.clearRect(0, 0, width, height);
            mirror = 50;
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX -= 10, destY, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
        },60);  
    }
    function flyUp(){
        t = setInterval(function(){
            if (destY<0){birdFly();}
            else{
            cx.clearRect(0, 0, width, height);
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX, destY -= 10, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
            },60);
    }
    function flyDown(){
        t = setInterval(function(){
            if (destY>=750){birdFly();}
            else{
            cx.clearRect(0, 0, width, height);
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX, destY += 10, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
        },60); 
    }