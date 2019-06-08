function Enemy(r) {
    this.pos = createVector(random(-GAME_WIDTH,GAME_WIDTH), random(-GAME_WIDTH,GAME_WIDTH));
    this.r = r;

    this.update = function(){
        var vel = createVector(player.pos.x-this.pos.x,player.pos.y-this.pos.y);
        //vel.setMag(this.r/(Math.pow(this.r,1.44))*100);
        //console.log(vel);
        vel.setMag(8);
        this.pos.add(vel);
    }

    this.show = function () {
        fill(124);
        ellipse(this.pos.x, this.pos.y, this.r,this.r);
        stroke(255);
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