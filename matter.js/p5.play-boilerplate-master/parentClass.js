class ParentClass{
    constructor(x,y,w,h){
        //properties
        //This is json format and it stores key value pairs
        var bot = {
            restitution:0.1
        }
        this.body = Bodies.rectangle( x, y, w, h, bot);
        World.add(world, this.body);
        this.width = w;
        this.height = h;

        this.image = loadImage("sprites/ground.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image( this.image, 0, 0, this.width, this.height); 
        pop();
    }
}