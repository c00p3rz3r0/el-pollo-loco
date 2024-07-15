class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }
    /**
     * 
     * @param {Array} arr - ['img/image1.png','img/image2.png']
     */
    loadImages(arr){
        arr.forEach((path)=> {
        let img = new Image();
        img.src = path;
        this.imageCache[path] = img;
    })
    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
    resolveImgageIndex(i){
        if (i == 100) {
            return 5;
        }else if (i > 80) {
            return 4;
        }else if (i > 60) {
            return 3;
        }else if (i > 40) {
            return 2;
        }else if (i > 20) {
            return 1;
        }else {
            return 0;            
        }
    }
}