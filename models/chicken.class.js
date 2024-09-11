class Chicken extends MovableObject {
  y = 360;
  height = 70;
  width = 70;
  IMAGES_WALKING = [
    "/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  speed = 0.2;
/**
 * load chicken images
 */
  constructor() {
    super().loadImage("/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.x = 350 + (Math.random() * 500 + 200);
    this.speed = 0.15 + Math.random() * 0.5;
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
  }
/**
 * animate moving interval and images
 */
  animate() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);
    this.moveLeft((this.otherDirection = false));
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 190);
  }
}
