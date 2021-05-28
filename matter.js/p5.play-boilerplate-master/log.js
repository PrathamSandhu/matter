class Log{
    constructor(x,y,w,h,a){
        //properties
        //This is json format and it stores key value pairs
        var bot = {
            restitution:0.1,
            friction:0.5
        }
        this.body = Bodies.rectangle( x, y, w, h, bot);
        Matter.Body.setAngle(this.body, a);
        World.add(world, this.body);
        this.width = w;
        this.height = h;

        this.image = loadImage("sprites/wood2.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        imageMode(CENTER);
        image( this.image, 0, 0, this.width, this.height); 
        pop();
    }
}