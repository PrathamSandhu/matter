class Pig{
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
        // 255 means "white"
        this.visibility = 255;
        this.image = loadImage("sprites/enemy.png");
    }
    display(){
        var angle = this.body.angle;
        if(this.body.speed < 4.5){
            push();
                translate(this.body.position.x, this.body.position.y);
                rotate(angle);
                fill("green");
                imageMode(CENTER);
                image( this.image, 0, 0, this.width, this.height); 
            pop();
        }

        else{
            World.remove(world,this.body);
            this.visibility = this.visibility - 5;
            push();
            tint(255, this.visibility);
            imageMode(CENTER);
            image( this.image, this.body.position.x, this.body.position.y, this.width, this.height); 
            pop();
        }
    }
}