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
  statusBarBoss = new StatusBarBoss (1850,120);
  thowableObjects = [];
  collectedBottles = 0;
  collectedCoins = 0;
  longIdle = 1 ;
  throwActual = new Date().getTime();

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
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
      this.checkThrowObject();
      this.checkCollect('bottles');
      this.checkCollect('coins');
      this.checkEnemyHit();
    }, 50);
  }

  checkEnemyHit(){
    this.level.enemies.forEach((enemy, i) => {
      if (this.character.isColliding(enemy) && this.character.isAboveGround()&& this.character.speedY<=-2) {
        world.level.enemies.splice(i,1);
        this.character.jump();
      }
  });
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
       if (this.character.isColliding(enemy)&& !this.character.isAboveGround()) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }
  checkCollect(item) {
    for (let i = 0; i < this.level[item].length; i++) {
      const element = this.level[item][i];
      if (this.character.isColliding(element) && item == 'bottles') {
        this.collectedBottles ++;
        this.bottleBar.setPercentage(this.collectedBottles);
        this.level[item].splice(i, 1);
      }
      if (this.character.isColliding(element) && item == 'coins') {
        this.collectedCoins ++;
        this.coinBar.setPercentage(this.collectedCoins);
        this.level[item].splice(i, 1);
    }
  } 
}
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

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addBackground();
    this.addFixedObjects();
    this.addLevelObject();
  
    if (this.character.energy == 0) {
      let randomNum = Math.floor(Math.random() * 4);
      this.level.endimg[randomNum].x = this.character.x-100;
      this.addToMap(this.level.endimg[randomNum]);
      document.getElementById('restartGame').classList.remove('display-none')
      return;
    }

    this.ctx.translate(-this.camera_x, 0);
    this.playDraw();
  }

  playDraw(){
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addLevelObject(){
    this.ctx.translate(this.camera_x, 0);
    this.addToMap(this.character);
    this.addToMap(this.statusBarBoss);
    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.thowableObjects);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.level.coins);
  }

  addBackground(){
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundobjects);
    this.addObjectsToMap(this.level.clouds);
  }
  addFixedObjects(){
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.coinBar);
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
