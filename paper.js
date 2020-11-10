class paper{
    

    constructor(x,y){
    var options= {
       isStatic: false,
       resistution:0.3,
       friction:0.5,
       density:1.2
    }
     
     this.body = Bodies.circle(x,y,50,options);
     //this.width = 50;
     //this.height = 50;
     World.add(world, this.body);
    }

     display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      ellipseMode(CENTER);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("red");
      ellipse(pos.x,pos.y,50,50);
      pop();
     }




     
};