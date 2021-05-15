class Rubber{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(710,370,40,options);
        this.radius=40;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        ellipseMode(RADIUS);
        strokeWeight(2);
        stroke("white");
        fill("blue");
        ellipse(0,0,40);
        pop();
    }
}