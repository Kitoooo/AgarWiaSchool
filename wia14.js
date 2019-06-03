var blobs = [];
var DEFAULT_PLAYER_SIZE = 64;
var i = 0;
var modifier = 1;
var started = 0;
var button
    // var height = window.screen.availHeight;
    // var width = window.screen.availWidth;

function setup(){
    //funkcja z frameworka p5 wywolywana w momencie zaldowania strony
    //windowWidth,windowsHeight,mouseX,mouseY to stałe frameworku p5

    //noCanvas();
    var cnv = createCanvas(0, 0);
    cnv.style('display', 'block');
    button = createButton("START");
    button.mousePressed(startGame);
    noLoop();
}
function startGame(){

    resizeCanvas(windowWidth, windowHeight);
    
    background(0);

    player = new Player(DEFAULT_PLAYER_SIZE);
    
    for(i=0;i<200;i++){
        var x = random(-5000,5000);
        var y = random(-5000,5000);
        blobs[i] = new blob(x,y,24);
    }
    loop();
    started = 1;
    button.remove();

}
function draw(){
    //p5 function which is basicaly just a loop
    if(started ==1){
    background(0);
    translate(width/2,height/2);
    var div = DEFAULT_PLAYER_SIZE/player.r
    scale(div+0.1);
    translate(-player.pos.x,-player.pos.y);
    
    for (var i = blobs.length-1;i>=0;i--){
        blobs[i].show();
        if(player.eats(blobs[i])){
            blobs.splice(i,1)
            if(modifier<0){
                modifier*=1.2;
            }
            else{
            modifier = -2;
            }
            //if player eats blob he shrinks double the speed he grows
        }
    }
    if(player.r<=64){
    //when players has shrinked to normal size it goes back to growing.
        modifier = 1;
    }

    player.r+=(0.4*modifier);
    //player grows

    player.update();
    player.show();
}
    
}
function remove(d){
    d.remove();
}
function windowResized() {
    if (started == 1){
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    }
}
