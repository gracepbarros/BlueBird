let cx = document.getElementById("canvas").getContext("2d");
let img = new Image();
img.src = "flappy-bird2.png";
let destX = 363, destY = 375;
let x = 0, y=0, wing = 0, mirror = 0;
let t;
img.addEventListener("load",function () {
        cx.drawImage(img, 0, 0, 75, 50, x + destX, y + destY, 75, 50);
        setInterval(birdFly,3000);});

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
            cx.clearRect(0, 0, 800, 800);
            mirror = 0;
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX += 10, destY, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
        }, 60);
    }
    function flyToLeft(){
        t = setInterval(function(){
            if (destX<=0){birdFly();}
            else{
            cx.clearRect(0, 0, 800, 800);
            mirror = 50;
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX -= 10, destY, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
        },60);  
    }
    function flyUp(){
        t = setInterval(function(){
            if (destY<0){birdFly();}
            else{
            cx.clearRect(0, 0, 800, 800);
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX, destY -= 10, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
            },60);
    }
    function flyDown(){
        t = setInterval(function(){
            if (destY>=750){birdFly();}
            else{
            cx.clearRect(0, 0, 800, 800);
            cx.drawImage(img, wing*75, mirror+0, 75, 50, destX, destY += 10, 75, 50);}
            wing == 7 ? wing=0 : wing += 1;
        },60); 
    }