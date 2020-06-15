class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.02,
            length:320
        }
        this.pointB=pointB;
        this.rope = Constraint.create(options)
        World.add(world,this.rope);
    }
    display(){
        push();
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(3)
        stroke("white")
        line(pointA.x,pointA.y-50,pointB.x,pointB.y)
        pop();
    }
}
