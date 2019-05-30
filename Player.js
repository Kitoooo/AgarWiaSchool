function Player(r) {
    this.pos = createVector(width/2, height/2);
    this.r = r;

    this.update = function(){
        var vel = createVector(mouseX-width/2,mouseY-height/2);
        //vel.sub(this.pos);
        vel.setMag(2);
        this.pos.add(vel);
    }

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r);
    }
    this.eats = function(blob){

    }
}