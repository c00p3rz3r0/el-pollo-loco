class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    isJumping = false;
/**
 * calculate the gravity
 */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                if (world.character.y > 150) {
                    world.character.y = 150;
                }
            }

        }, 1000 / 25);
    }
/**
 * check the character is above ground
 * @returns 
 */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else{
        return this.y < 150;
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }
/**
 * Play animation 
 * @param {images of the character or enemie} images 
 */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 33;
        this.isJumping = true;
    }
/**
 * Is the character coliding with an enemie
 * @param {enemies} obj 
 * @returns 
 */
    isColliding(obj) {
        return  (this.x + this.width) >= (obj.x + obj.offsetX) && this.x <= (obj.x + obj.width - obj.offsetX) && 
                (this.y + this.offsetY + this.height) >= (obj.y + obj.offsetY) &&
                (this.y + obj.offsetY) <= (obj.y + obj.height);
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }

    }
    isDead() {
        return this.energy == 0;
    }
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

}