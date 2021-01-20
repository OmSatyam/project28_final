class Stone{
   constructor(x,y,radius){
     var options = {
        'isStatic': false,
        'restitution':0,
        'friction':1,
        'density':1.2
        
     }  
   this.body = Matter.Bodies.circle(x,y,radius,options);
   this.radius = radius;
   World.add(world,this.body);
   }

display(){
    var pos = this.body.position;
    fill(0);
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);   
    ellipse(0,0,this.radius,this.radius);
    pop();
}
}