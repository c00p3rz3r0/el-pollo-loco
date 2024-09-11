class Bottles extends DrawableObject{
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    width = 70;
    height = 70;
    y = 360;
    offsetY = 0;
    /**
     * load bottles with a random position in the world
     */
    constructor(){
        super().loadImage('img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 500 + Math.random()*900 + this.x;
        this.loadImages(this.IMAGES_BOTTLE);

    }
}