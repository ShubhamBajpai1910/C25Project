class Net {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/dustbingreen.png");
        World.add(world , this.body);
    }
display(){
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
   imageMode(CENTER);
    strokeWeight(4);
    stroke("white");
    fill("cyan");
   image(this.image,0,0,this.width , this.height);
   pop();
}

}