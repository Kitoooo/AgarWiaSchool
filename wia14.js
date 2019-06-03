
var Player;
var blobs = [];
var i = 0;
    // var height = window.screen.availHeight;
    // var width = window.screen.availWidth;
function setup(){
        //funkcja z frameworka p5 wywolywana w momencie zaldowania strony
        //windowWidth,windowsHeight,mouseX,mouseY to stałe frameworku p5
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    background(0);
    player = new Player(64);
    
    for(i=0;i<200;i++){
        blobs[i] = new blob(random(-width,width*2),random(-height,height*2),16);
    }
}
function draw(){
    //funkcja z frameworka p5 wywolywana caly czas
    background(0);
    translate(width/2-player.pos.x,height/2-player.pos.y);
    
    
    
    //translate(-width+player.pos.x,-height+player.pos.y);
    for (var i = blobs.length-1;i>=0;i--){
        blobs[i].show();
        if(player.eats(blobs[i])){
            blobs.splice(i,1)
        }
    }
    player.r+=1;
    player.show();
    player.update();
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}