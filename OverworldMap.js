class OverworldMap {
    constructor (config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = caonfig.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx){
        ctx.drawImage (this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx){
        ctx.drawImage (this.upperImage, 0, 0)
    }
}


window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/image/maps/DemoLower.png",
        upperSrc: "/image/maps/DemoUpper.png",
        gameObjects: {
            hero: new gameObjects ({
                x:3,
                y:1,
            }),
            npc1: new gameObjects ({
                x:9,
                y:2,
                src: "/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/image/maps/KitchenLower.png",
        upperSrc: "/image/maps/KitchenUpper.png",
        gameObjects: {
            hero: new gameObjects ({
                x:5,
                y:6,
            }),
            npcA: new gameObjects ({
                x:7,
                y:9,
                src: "/images/characters/people/npc2.png"
            }),
            npcB: new gameObjects ({
                x:7,
                y:9,
                src: "/images/characters/people/npc3.png"
            })
        }
    },
}