class Coins extends DrawableObject{
    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
    width = 100;
    height = 100;
    y = 360;
    
    constructor(){
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 500 + Math.random()*900 + this.x;
        this.loadImages(this.IMAGES_COINS);
    }
}