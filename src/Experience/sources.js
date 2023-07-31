export default [
    {
        name: 'environmentMapTexture',
        loader: 'cubeTextureLoader',
        path: [
            'textures/environmentMap/px.jpg',
            'textures/environmentMap/nx.jpg',
            'textures/environmentMap/py.jpg',
            'textures/environmentMap/ny.jpg',
            'textures/environmentMap/pz.jpg',
            'textures/environmentMap/nz.jpg',
        ]
    },
    {
        name: 'grassColorTexture',
        loader: 'textureLoader',
        path: 'textures/dirt/color.jpg'
    },
    {
        name: 'grassNormalTexture',
        loader: 'textureLoader',
        path: 'textures/dirt/normal.jpg'
    },
    {
        name: 'foxModel',
        loader: 'gltfLoader',
        path: 'models/Fox/glTF/Fox.gltf'
    }
]