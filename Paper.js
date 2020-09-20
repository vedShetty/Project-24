class Paper{
    constructor(x, y){
        var options = {
            'restitution':0.3, 
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.diameter = 10;
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        stroke("black");
        fill("violet");
        ellipse(0,0,this.diameter);
        pop();      
   }

}
