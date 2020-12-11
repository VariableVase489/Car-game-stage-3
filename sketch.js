var gameState = 0;
var playerCount = 0;
var PAE = 0;
var game, form, player;
var db;
var allPlayers;
var cars, car1, car2, car3, car4;
var car1_png, car2_png, car3_png, car4_png, ground_png, track_jpg;
var textWritten = false;

function preload(){
    car1_png = loadImage("Images/car1.png");
    car2_png = loadImage("Images/car2.png");
    car3_png = loadImage("Images/car3.png");
    car4_png = loadImage("Images/car4.png");
    ground_png = loadImage("Images/ground.png");
    track_jpg = loadImage("Images/track.jpg");
}

function setup(){
    createCanvas(displayWidth - 100,displayHeight - 100);
    db = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){

    if(playerCount === 4 && gameState === 0) {
        game.updateState(1);
    }

    if(gameState === 1) {
        clear();
        game.play();
    }

    if(gameState === 2) {
        game.end();
    }
    
}
