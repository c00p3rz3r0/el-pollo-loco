class ThrowableObject extends MovableObject{
    IMAGES_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];
    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];
    offsetY = -100;
/**
 * 
 * @param {koordinat x} x 
 * @param {koordinat y} y 
 */
    constructor(x,y){
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 60;
        this.throw();
    }
    /**
     * Throw and play anaimation of the Bottles
     * @param {position} x 
     * @param position} y 
     */
    throw(x,y){
        this.speedY = 30;
        this.applyGravity();

        let throwInterval = setInterval(()=> {
        this.x += 12;
        this.playAnimation(this.IMAGES_THROW);
        }, 30);

        let hitThrow = setInterval(()=>{
        world.level.enemies.forEach((enemy, i) => {
            if(this.isColliding(enemy) || this.x == 360){
                this.playAnimation(this.IMAGES_SPLASH);
                    world.level.enemies[i].playAnimation(world.level.enemies[i].IMAGES_HURT)
                    clearInterval(throwInterval);
                    clearInterval(hitThrow);
                    world.level.enemies[i].setPercentage(25);
                    world.statusBarBoss.setPercentage(25);
                }
                if (this.y >= 300 ) {
                    this.playAnimation(this.IMAGES_SPLASH);
                    clearInterval(throwInterval);
                    clearInterval(hitThrow);
                }
            });
        }, 10);
    }

}