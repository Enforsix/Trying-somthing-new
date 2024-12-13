class Sprite {
    constructor(config){

        // set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () =>{
            this.isLoaded = true;
        }

        //Shadow
        this.shadow = new Image();
        this.useShadow = true; // config.useShadow || false
        if (this.useShadow) {
         this.shadow.src = "/images/characters/shadow.png";   
        }        
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

       

        //config Animation & initial State
        this.animations=config.animations || {
            idelDown: [
                [0,0]
            ]
        }
        this.curentnAnimation = config.curentnAnimation || "idleDown"
        this.curentnAnimationFrame = 0;

        //Refrence the game object
        this.gameObject = config.gameObject;
    }

    draw (ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y)

        this.isLoaded = true && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
        )
    }
}