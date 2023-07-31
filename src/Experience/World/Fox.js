import * as THREE from 'three'

class Fox {
    constructor(experience) {
        this.scene = experience.scene
        this.resource = experience.resources.items.foxModel
        this.time = experience.time
        this.debug = experience.debug

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('fox')
        }

        this.setModel()
        this.setAnimation()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(0.02, 0.02, 0.02)
        this.scene.add(this.model)

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
            }
        })
    }

    setAnimation() {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        this.animation.actions = {}

        //idle
        this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])

        //walk
        this.animation.actions.walk = this.animation.mixer.clipAction(this.resource.animations[1])

        //run
        this.animation.actions.run = this.animation.mixer.clipAction(this.resource.animations[2])

        //current
        this.animation.actions.current = this.animation.actions.idle
        this.animation.actions.current.play()

        this.animation.play = name => {
            const newAction = this.animation.actions[name]
            const oldAction = this.animation.actions.current

            newAction.reset()
            newAction.play()
            newAction.crossFadeFrom(oldAction, 1)

            this.animation.actions.current = newAction
        }

        if (this.debug.active) {
            const debugObject = {
                playIdle: () => { this.animation.play('idle') },
                playWalking: () => { this.animation.play('walk') },
                playRunning: () => { this.animation.play('run') },
            }
            this.debugFolder.add(debugObject, 'playIdle')
            this.debugFolder.add(debugObject, 'playWalking')
            this.debugFolder.add(debugObject, 'playRunning')
        }
    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}

export default Fox;