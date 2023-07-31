import * as THREE from 'three'
import Environment from './Environment'
import Floor from './Floor'
import Fox from './Fox'

class World {
    constructor(experience) {
        this.scene = experience.scene
        this.resources = experience.resources

        //Resources loaded event
        this.resources.on('loaded', () => {
            // Setup
            this.floor = new Floor(experience)
            this.fox = new Fox(experience)
            this.environment = new Environment(experience)
        })
    }

    update() {
        if (this.fox) {
            this.fox.update()
        }
    }
}

export default World;