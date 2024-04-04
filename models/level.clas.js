class Level {
    enemies;
    clouds;
    backgroundobjects;
    bottles;
    level_end_x = 2200;
    
    constructor(enemies, clouds, backgroundobjects, bottles){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundobjects = backgroundobjects;
        this.bottles = bottles;
    }
}