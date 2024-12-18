class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        
        console.log(this.map)
    }

startGameLoop () {
    const step = () => {    
        
        // Drew Lower Layer
        this.map.drawLowerImage(this.ctx);
       
        console.log(this.map.drawLowerImage)

        // draw game objects
        Object.values(this.map.gameObjects).forEach(Object => {
            Object.x += 0.02;
            Object.sprite.draw(this.ctx);
         })

        // Drew Upper Layer
        this.map.drawUpperImage(this.ctx);
        

        requestAnimationFrame (() => {
           step(); 
        })
    }
    step();
}    


init() {
    this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
    this.startGameLoop();
 }
}