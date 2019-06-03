function Player(r) {
    this.pos = createVector(width/2, height/2);
    this.r = r;

    this.update = function(){
        var vel = createVector(mouseX-width/2,mouseY-height/2);
        //vel.sub(this.pos);
        vel.setMag(5);
        this.pos.add(vel);
    }

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r,this.r);
        //console.log(this.r);
        //line(this.pos.x,this.pos.y,this.pos.x+this.r/2,this.pos.y);
    }
    this.eats = function(other){
        var d = p5.Vector.dist(this.pos, other.pos);
        if(d*2<this.r+other.r){
            this.r=64;
            console.log(d);
            return true;
        }
        else{
            return false;
        }
    }
}