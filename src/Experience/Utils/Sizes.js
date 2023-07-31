import EventEmitter from "./EventEmitter"

class Sizes extends EventEmitter {
    constructor() {
        super()
        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRation = Math.min(window.devicePixelRatio, 2)

        // Resize
        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight

            this.trigger('resize')
        })
    }
}

export default Sizes;