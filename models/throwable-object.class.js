class ThrowableObject extends MovableObject{

    constructor(x,y){
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 60;
        this.throw();
    
    }

    throw(x,y){
        this.speedY = 30;
        this.applyGravity();
        setInterval(()=> {
        this.x += 10;
        }, 25);
    }

}