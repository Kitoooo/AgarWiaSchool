function blob(x,y,r){
    this.r =r;
    this.pos=createVector(x,y)

    this.show = function() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
    this.eated = function(){
        
    }
}