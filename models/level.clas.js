class Level {
    enemies;
    clouds;
    backgroundobjects;
    bottles;
    coins;
    endimg;
    level_end_x = 2200;
    /**
     * generate the hole level
     * @param {charcter & enimies} enemies 
     * @param {background objects} clouds 
     * @param {background images} backgroundobjects 
     * @param {} bottles 
     * @param {} coins 
     * @param {} endimg 
     */
    constructor(enemies, clouds, backgroundobjects, bottles, coins, endimg){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.bottles = bottles;
        this.coins = coins;
        this.endimg = endimg;
    }
}