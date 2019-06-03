function Player(r) {
    this.pos = createVector(0, 0);
    this.r = r;

    this.update = function(){
        var vel = createVector(mouseX-width/2,mouseY-height/2);
        //vel.sub(this.pos);
        vel.setMag(15);
        if(this.pos.x>=5000){
            if(mouseX-width/2>=0){
            vel.x=0;
            }            
        }
        if(this.pos.y>=5000){
            if(mouseY-height/2>=0){
            vel.y=0;
            }            
        }
        if(this.pos.x<=-5000){
            if(mouseX-width/2<=0){
            vel.x=0;
            }            
        }
        if(this.pos.y<=-5000){
            if(mouseY-height/2<=0){
            vel.y=0;
            }            
        }

        this.pos.add(vel);
        
    }

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r,this.r);
        console.log("x: "+this.pos.x);
        console.log("y: "+this.pos.y);
        //line(this.pos.x,this.pos.y,this.pos.x+this.r/2,this.pos.y);
    }
    this.eats = function(other){
        var d = p5.Vector.dist(this.pos, other.pos);
        if(d*2<this.r+other.r){
            return true;
        }
        else{
            return false;
        }
    }
}