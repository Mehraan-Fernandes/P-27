class Roof{
    constructor(x,y,width,height){
        var options = {
           'isStatic':true
        }
        this.roof = Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world,this.roof);
        
        
    }
    display(){
        push();
        strokeWeight(3)
        stroke("white")
        rectMode(CENTER);
        rect(this.roof.position.x,this.roof.position.y,this.width,this.height);
        pop();
    }
}