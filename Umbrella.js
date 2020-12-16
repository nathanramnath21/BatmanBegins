class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.x=x
        this.y=y
        this.image = loadImage("images/Walking Frame/walking_1.png")
        this.body = Bodies.rectangle(x,y,.1,.1, options)
        World.add(world, this.body)
    }   

    display(){
        var umbrellapos = this.body.position
        imageMode(CENTER)
        image(this.image, umbrellapos.x, umbrellapos.y, 100,400)
    }
}