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
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];
    IMAGES_WALKING = [
        '/img/4_enemie_boss_chicken/1_walk/G1.png',
        '/img/4_enemie_boss_chicken/1_walk/G2.png',
        '/img/4_enemie_boss_chicken/1_walk/G3.png',
        '/img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    hadFirstContact = false;
    percentage = 100;

    constructor(){
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 1800;
        this.animate();
    };
    setPercentage(percentage){
        this.percentage = this.percentage - percentage; 
    }

    animate(){
        let i = 0;
        setInterval(()=>{
            if (world.character.x > 1300 && !this.hadFirstContact) {
                this.playAnimation(this.IMAGES_ALERT);
                setInterval(() => {
                    this.moveLeft();
                  }, 1000 / 60);
                  setInterval(() => {
                    this.playAnimation(this.IMAGES_WALKING);
                  }, 190);
            }if(this.percentage <= 10){
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(()=>{
                restartGame();
                },2000);

            }
        }, 190);
    }
};