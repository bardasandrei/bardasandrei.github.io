/**
 * Created by Bardas on 20-Mar-18.
 */

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

//imagine fundal
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
    bgReady = true;
};
bgImage.src = "background.jpg";

//imagine pisica
var ctReady = false;
var ctImage = new Image();
ctImage.onload = function(){
    ctReady = true;
};
ctImage.src = "cat.png";


//imagine peste
var fsReady = false;
var fsImage = new Image();
fsImage.onload = function(){
    fsReady = true;
};
fsImage.src = "fish.png";


//obiecte
var pisica = {
    speed:256,
    x: 0,
    y: 0
};

var peste = {
    x: 0,
    y: 0
};

var pestiPrinsi = 0;

//controale tastatura
var tasteApasate = {};

addEventListener("keydown", function (e){
    tasteApasate[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e){
    delete tasteApasate[e.keyCode];
}, false);

//reseteaza jocul
var reset = function(){
    pisica.x = canvas.width / 2;
    pisica.y = canvas.width / 2;

    peste.x = 32 +(Math.random() * (canvas.width - 64));
    peste.y = 32 +(Math.random() * (canvas.height - 64));

};

//actualizeaza obiectele din joc
var update = function (modifier){
    if(38 in tasteApasate){
        pisica.y -= pisica.speed * modifier;
    }
    if(40 in tasteApasate){
        pisica.y += pisica.speed * modifier;
    }
    if(37 in tasteApasate){
        pisica.x -= pisica.speed * modifier;
    }
    if(39 in tasteApasate){
        pisica.x += pisica.speed * modifier;
    }


    //daca se ating
    if(
        pisica.x <= (peste.x + 32)
        && peste.x <= (pisica.x + 32)
        && pisica.y <= (peste.y + 32)
        && peste.y <= (pisica.y + 32)
    ){
        ++pestiPrinsi;
        reset();
    }
};

//grafica adaugata + altele
var render = function(){
    if(bgReady){
        ctx.drawImage(bgImage, 0, 0);
    }
    if(ctReady){
        ctx.drawImage(ctImage, pisica.x, pisica.y);
    }
    if(fsReady){
        ctx.drawImage(fsImage, peste.x, peste.y);
    }

    //scor
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Pesti mancati: " + pestiPrinsi, 32, 32);

};


//bucla jocului
var main = function(){
    var now = Date.now();
    var delta = now - then;

    update(delta/1000);
    render();

    then = now;

    //face asta din nou imediat
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


var then = Date.now();
reset();
main();













