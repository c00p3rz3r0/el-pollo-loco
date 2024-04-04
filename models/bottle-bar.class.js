class BottleBar extends DrawableObject{
    IMAGES_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];
    percentageBottle = 0;

    constructor(){
        super();
        this.loadImages(this.IMAGES_BOTTLE);
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentageBottle);
    }
    setPercentage(percentage){
        this.percentageBottle = percentage * 20;  // => 0,,,,,5
        let imagePath = this.IMAGES_BOTTLE[this.resolveImgageIndex(this.percentageBottle)];
        this.img = this.imageCache[imagePath];
    }
}