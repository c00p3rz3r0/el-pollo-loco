class Level {
    enemies;
    clouds;
    backgroundobjects;
    bottles;
    coins;
    endimg;
    level_end_x = 2200;
    
    constructor(enemies, clouds, backgroundobjects, bottles, coins, endimg){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.bottles = bottles;
        this.coins = coins;
        this.endimg = endimg;
    }
}