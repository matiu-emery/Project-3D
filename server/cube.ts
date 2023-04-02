import * as THREE from 'three'

export class Cube {
  // created a mesh property
  mesh: THREE.Mesh
  // construtor function
  constructor() {
    //created a new BoxGeomerty object with dimensions
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    //created a new MeshStandardMaterial
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
    this.mesh = new THREE.Mesh(geometry, material)
  }
}

// Matiu-Persona-Project/
// | -- Client/
// |  | -- Component/
// |    | -- App.tsx
// |    | -- Scene.tsx
// |  | --index.tsx
// |  | -- webpackConfig.config.js
// | -- node_modules/
// | -- server/
// |  | -- public/
// |    | -- bundle.js
// |    | -- bundle.js.map
// |    | -- index.html
// |    | -- main.css
// |  | -- cube.ts
// |  | -- index.ts
// |  | -- Scene.ts
// |  | -- server.ts
// | -- .gitignore
// | -- package-Lock.json
// | -- package.json
// | -- readme.md
// | -- tsconfig.json
