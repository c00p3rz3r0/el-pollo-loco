class CoinBar extends DrawableObject{
    IMAGES_COIN = [
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
            'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];
    percentageCoin = 0;

    constructor(){
        super();
        this.loadCoinBar(20,80);
        this.width = 200;
        this.height = 60;
    }
    loadCoinBar(x, y){
        this.loadImages(this.IMAGES_COIN);
        this.setPercentage(this.percentageCoin, this.IMAGES_COIN);
        this.x = x;
        this.y = y;
    }
    
    setPercentage(percentage){
        this.percentage = percentage;  // => 0,,,,,5
        let imagePath = this.IMAGES_COIN[this.resolveImgageIndex()];
        this.img = this.imageCache[imagePath];
    }
}