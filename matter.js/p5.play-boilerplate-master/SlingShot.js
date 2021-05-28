class SlingShot{
    constructor( body1, point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            stiffness : 0.01,
            length : 15,
          }
          this.chain = Constraint.create(options);
          World.add( world, this.chain);
          this.A = body1;
          this.B = point2;

          this.padimage = loadImage("sprites/sling pad.png");
          this.image = loadImage("sprites/Sling.png");
    }
    display(){

    if(this.chain.bodyA!==null){
        strokeWeight(5);
        stroke( 74, 40, 17);

        if(this.A.position.x <= 270){
            push();
            imageMode(CENTER);
            image( this.padimage, this.A.position.x - 25, this.A.position.y + 10, 10, 25);
            pop();
        }
        else if(this.A.position.x > 270){
            push();
            imageMode(CENTER);
            image( this.padimage, this.A.position.x + 30, this.A.position.y + 10, 10, 25);
            pop();
        }
        line( this.A.position.x + 30, this.A.position.y, this.B.x, this.B.y);
        line( this.A.position.x - 30, this.A.position.y, this.B.x - 80, this.B.y);
    }

        push();
        imageMode(CENTER);
        image( this.image, 250, 270, 250, 250);
        pop();
    }
    fly(){
        this.chain.bodyA = null;
    }

    attach(x){
        this.chain.bodyA = x;
    }
}
/*constructr consists of properties and and functions are meant for assigning behaveiors*/