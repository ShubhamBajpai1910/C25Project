class Paper {
    constructor(x,y,radius){
    
        var options = {
            isStatic:false,
            restituion:0.3,
            friction:0.5,
            density:1.2
        }



        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("sprites/paper.png");
        World.add(world , this.body);
    }

    display(){
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
    strokeWeight(5);
    stroke("black");
    fill("cyan");
    imageMode(BOTTOM);
   image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}