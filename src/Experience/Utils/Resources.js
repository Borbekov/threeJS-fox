import EventEmitter from "./EventEmitter";
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

class Resources extends EventEmitter {
    constructor(sources) {
        super()

        // Options
        this.sources = sources

        // Setup
        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading() {
        for (const source of this.sources) {
            this.loaders[source.loader].load(
                source.path,
                (file) => {
                    this.sourceLoaded(source, file);
                }
            )
        }
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file
        this.loaded += 1
        if (this.loaded === this.toLoad) {
            this.trigger('loaded')
        }
    }
}

export default Resources;