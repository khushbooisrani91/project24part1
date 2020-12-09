class Dustbin{
    constructor(x,y){
        
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeigth=100;
        this.wallThickness=20;
        this.angle=0;

        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeigth/2,this.wallThickness,this.dustbinHeigth,{isStatic:true})
        Matter.Body.setAngle(this.leftWalldBody,this.angle)

        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeigth/2,this.wallThickness,this.dustbinHeigth,{isStatic:true})
        Matter.Body.setAngle(this.rightWalldBody,-1*this.angle)


        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rigthWallBody);
    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRigth = this.rightWallBody.position;
        push()
        translate(posLeft,posLeft.y)
        rectMode(CENTER);
        angleMode(RADIANS)
        
        fill(255)
        stroke(255)
        rect(pos.x,pos.y,this.width,this.height);
        

    }

}