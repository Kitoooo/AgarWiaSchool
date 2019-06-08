var blobs = [];
var DEFAULT_PLAYER_SIZE = 64;
var modifier = 1;
var Enemymodifier = 1;
var started_flag = 0;
var button = null;
var GAME_WIDTH = 10000;
var GAME_HEIGHT = 10000;
    // var height = window.screen.availHeight;
    // var width = window.screen.availWidth;

function setup(){
    //funkcja z frameworka p5 wywolywana w momencie zaldowania strony
    //windowWidth,windowsHeight,mouseX,mouseY to stałe frameworku p5

    //noCanvas();
    var cnv = createCanvas(0, 0);
    cnv.style('display', 'block');
    button = createButton("START");
    //button.style('text-allign','center');
    button.mousePressed(startGame);
    noLoop();
}
function startGame(){

    resizeCanvas(windowWidth, windowHeight);
    
    background(0);
    stroke(255);
    player = new Player(DEFAULT_PLAYER_SIZE);
    enemy = new Enemy(DEFAULT_PLAYER_SIZE);
    
    for(i=0;i<200;i++){
        var x = random(-GAME_WIDTH,GAME_WIDTH);
        var y = random(-GAME_HEIGHT,GAME_HEIGHT);
        blobs[i] = new blob(x,y,24);
    }
    loop();
    started_flag = 1;
    button.remove();
}
function draw(){
    //p5 function which is basicaly just a loop
    if(started_flag ==1){
    background(0);
    translate(width/2,height/2);
    var div = DEFAULT_PLAYER_SIZE/player.r
    scale(div+0.1);
    translate(-player.pos.x,-player.pos.y);
    drawGrid();
    for (var i = blobs.length-1;i>=0;i--){
        blobs[i].show();
        if(player.eats(blobs[i])){
            blobs.splice(i,1)
            if(modifier<0){
                modifier*=1.2;
            }
            else{
            modifier = -3;
            }
            //if player eats blob he shrinks triple the speed he grows
        }
    }
    if(player.r<=64){
    //when players has shrinked to normal size it goes back to growing.
        modifier = 1;
    }


    if(enemy.eats(player)){
        button = createButton("RESTART");
        button.mousePressed(startGame);
        noLoop();
    }
    player.r+=(0.4*modifier);
    enemy.r+=(0.5*Enemymodifier);
    //player grows
    enemy.update();
    enemy.show();
    player.update();
    player.show();
    }
}
function windowResized() {
    if (started_flag == 1){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    }
}
function drawGrid(){
    line(-GAME_WIDTH,-GAME_HEIGHT,GAME_WIDTH,-GAME_HEIGHT);//top border
    line(-GAME_WIDTH,-GAME_HEIGHT,-GAME_WIDTH,GAME_HEIGHT);//left border
    line(GAME_WIDTH,-GAME_HEIGHT,GAME_WIDTH,GAME_HEIGHT);//right border
    line(-GAME_WIDTH,GAME_HEIGHT,GAME_WIDTH,GAME_HEIGHT);//bottom border
    for(var j=250;-GAME_WIDTH+j<=GAME_WIDTH;j+=250){
        line(-GAME_WIDTH+j,-GAME_HEIGHT,-GAME_WIDTH+j,GAME_HEIGHT);
        line(-GAME_WIDTH,-GAME_HEIGHT+j,GAME_WIDTH,-GAME_HEIGHT+j);
    }
    //strokeWeight(5);
    //stroke(50);
}
