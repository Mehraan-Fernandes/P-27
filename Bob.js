class Bob{
    constructor(x,y,radius){
        var options = {
            'frictionAir':0,
            'friction':0,
            'frictionStatic':0,
           // 'inertia': Infinity,
            'restitution':1.1,
            'isStatic':false,
        }
        this.bob = Bodies.circle(x,y,radius,options);
        this.radius=radius
        World.add(world,this.bob);
        
        
    }
    display(){
        push();
        strokeWeight(3)
        stroke("white")
        ellipseMode(RADIUS);
        circle(this.bob.position.x,this.bob.position.y,this.radius);
        pop();
    }
}