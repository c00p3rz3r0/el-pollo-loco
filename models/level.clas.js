class Level {
    enemies;
    endboss;
    clouds;
    backgroundobjects;
    bottles;
    coins;
    endimg;
    level_end_x = 2200;
    
    constructor(enemies, endboss, clouds, backgroundobjects, bottles, coins, endimg){
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.bottles = bottles;
        this.coins = coins;
        this.endimg = endimg;
    }
}