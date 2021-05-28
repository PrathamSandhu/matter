class Bird{
    constructor(x,y,w,h){
        //properties
        //This is json format and it stores key value pairs
        var bot = {
            restitution:0.1, 
        }
        this.body = Bodies.rectangle( x, y, w, h, bot);
        World.add(world, this.body);
        this.width = w;
        this.height = h;
        this.visibility = 255;

        this.image = loadImage("sprites/bird.png");
        this.smokeImage = loadImage("sprites/smoke.png");

        this.trajectory = []

    }
    display(){
        var angle = this.body.angle;

        if(this.body.position.x > 250 && this.body.velocity.x > 10){
        var position = [ this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
        }

        for(var i = 0; i < this.trajectory.length; i++){

            this.visibility = this.visibility - 0.1;
            push();
            tint(255, this.visibility);
            imageMode(CENTER); 
            image( this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
            pop();
        }

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image( this.image, 0, 0, this.width, this.height); 
        pop();
    }
}