class Endboss extends MovableObject{
    width = 280;
    height = 280;
    y = 160;

    IMAGES_ALERT = [
        '/img/4_enemie_boss_chicken/2_alert/G5.png',
        '/img/4_enemie_boss_chicken/2_alert/G7.png',
        '/img/4_enemie_boss_chicken/2_alert/G6.png',
        '/img/4_enemie_boss_chicken/2_alert/G8.png',
        '/img/4_enemie_boss_chicken/2_alert/G9.png',
        '/img/4_enemie_boss_chicken/2_alert/G10.png',
        '/img/4_enemie_boss_chicken/2_alert/G11.png',
        '/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    hadFirstContact = false;

    constructor(){
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.x = 1800;
        this.animate();
    };

    animate(){
        let i = 0;
        setInterval(()=>{
            if (world.character.x > 1300 && !this.hadFirstContact) {
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 190);
    }
};