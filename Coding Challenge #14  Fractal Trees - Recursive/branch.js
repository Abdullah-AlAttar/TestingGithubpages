function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.drawn=false;
    this.wigglewiggle=function()
    {
       // this.end.x+=sin(millis());
        this.end.y+=sin(millis());
    }
    this.show = function () {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
    this.branchRight = function () {
        
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / 4);
        dir.mult(0.7);
        
        var newEnd = p5.Vector.add(this.end, dir);
        var right = new Branch(this.end, newEnd);
        return right;
    }
    this.branchLeft = function () {
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI / 4);
        dir.mult(0.8);
        var newEnd = p5.Vector.add(this.end, dir);
        var left = new Branch(this.end, newEnd);
        return left;
    }
} 