class StatusBar extends DrawableObject {
    IMAGES_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];


    percentage = 100;
/**
 * 
 * @param {koordinat x} x 
 * @param {koordinat y} y 
 */
    constructor(x,y){
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentage);
    }
    setPercentage(percentage){
        this.percentage = percentage; 
        let imagePath = this.IMAGES_HEALTH[this.resolveImgageIndex(this.percentage)];
        this.img = this.imageCache[imagePath];
    }

}