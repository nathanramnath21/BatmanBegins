class Rain {

    constructor (x, y){
        var options = {
            restitution: 0.3,
            friction : 0.001
        }

        this.x = x
        this.y = y
        this.r = 5;
        this.body = Bodies.circle(x, y, 5,options);
        World.add(world, this.body);

    }

    display (){
        //var rainpos = this.body.position;
        fill(0, 157, 255);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r)
    }
    updateRain (){
        if (this.body.position.y>height) {

            Matter.Body.setPosition(this.body, {x:random(0,400), y: random(0,400)})

        }
    }
    }

