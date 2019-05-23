function Player(r) {
    this.pos = createVector(width/2, height/2);
    this.r = r;

    this.update = function(){
        var mouse = createVector(mouseX,mouseY);

    }

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
}