class World {
  character = new Character();
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar(20,0);
  bottleBar = new BottleBar();
  coinBar = new CoinBar();
  statusBarBoss = new StatusBarBoss ();
  thowableObjects = [];
  collectedBottles = 0;
  collectedCoins = 0;
  longIdle = 1 ;
  throwActual = new Date().getTime();
  bgMusic = new Audio('/audio/music.mp3');
  collectCoinSound = new Audio('/audio/coincollect.mp3');
  collectBottleSound = new Audio('/audio/bottlecollect.mp3');
  /**
 * 
 * @param {print Canvas} canvas 
 * @param {get Keyboard information} keyboard 
 */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
    setInterval(()=>{
      this.bgMusic.play();
    },0);

  }
/**
 * Start Game 
 */
  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObject();
      this.checkCollect('bottles');
      this.checkCollect('coins');
      this.checkEnemyHit();
    }, 50);
  }


/**
 * Check hit an enemy
 */
  checkEnemyHit(){
    this.level.enemies.forEach((enemy, i) => {

      if (this.character.isColliding(enemy) && this.character.isAboveGround()&& this.character.speedY<=-2) {
        if (enemy.name =='endboss') {
          this.level.enemies[i].setPercentage(25);
          this.statusBarBoss.setPercentage(25);
          this.character.jump();
        } else{
          world.level.enemies.splice(i,1);
          this.character.jump();
        }

      }
  });
  }
/**
 *Check Collision with an enemy 
 */
 checkCollisions() {
  this.level.enemies.forEach((enemys) => {
     if ((this.character.isColliding(enemys))&& !this.character.isAboveGround()) {
      this.character.hit();
      this.statusBar.setPercentage(this.character.energy);
      }
  })
}

  /**
   * Check collect an item
   */
  checkCollect(item) {
    for (let i = 0; i < this.level[item].length; i++) {
      const element = this.level[item][i];
      if (this.character.isColliding(element) && !this.character.isAboveGround() && item == 'bottles') {
        this.collectedBottles ++;
        this.collectBottleSound.play();
        this.bottleBar.setPercentage(this.collectedBottles);
        this.level[item].splice(i, 1);
      }
      if (this.character.isColliding(element) && !this.character.isAboveGround() && item == 'coins') {
        this.collectedCoins ++;
        this.collectCoinSound.play();
        this.coinBar.setPercentage(this.collectedCoins);
        this.level[item].splice(i, 1);
    }
  } 
}
/**
 * Check to throw a bottle
 */
  checkThrowObject() {
    if (this.keyboard.D && this.collectedBottles > 1) {
      let newBottle = new Date().getTime();
      if(newBottle > this.throwActual +1000){
        this.throwActual = new Date().getTime();
      let bottle = new ThrowableObject(
        this.character.x + 60,
        this.character.y + 100
      );
      this.thowableObjects.push(bottle);
      this.collectedBottles--;
      this.bottleBar.setPercentage(this.collectedBottles);
    }
    }
  }
/**
 * Draw Canvas with content
 * @returns Play End IMG
 */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addBackground();
    this.addFixedObjects();
    this.addLevelObject();
  


    this.ctx.translate(-this.camera_x, 0);
    this.playDraw();
  }
  /**
   * Draw the cnavas again
   */
  playDraw(){
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
/**
 * Add Level Object 
 */
  addLevelObject(){
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.thowableObjects);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.coins);
  }
/**
 * Add BAckgroun Images 
 */
  addBackground(){
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundobjects);
    this.addObjectsToMap(this.level.clouds);
  }
  /**
   * Add Object that don´t move
   */
  addFixedObjects(){
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.statusBarBoss);
  }

  addObjectsToMap(objects) {
    objects.forEach((obj) => {
      this.addToMap(obj);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }
  /**
   * Flip the Image of movable Objectsa
   * @param {Object} mo 
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
