import * as THREE from "three";

export class Cube {
  // created a mesh property 
  mesh: THREE.Mesh;
  // construtor function
  constructor() {
    //created a new BoxGeomerty object with dimensions
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    //created a new MeshStandardMaterial 
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    this.mesh = new THREE.Mesh(geometry, material);
  }
}


