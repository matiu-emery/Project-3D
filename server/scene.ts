import * as THREE from 'three'
import { Cube } from './cube'

export function createScene(canvas: HTMLCanvasElement) {
    //create a new scene
  const scene = new THREE.Scene()

    // create a new camera with perspective projection 
  const camera = new THREE.PerspectiveCamera(
    1000, // field of view 
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near clipping plane ,close to usser
    1000 // far clippping plane ,far from usser
    )

    // camera position 
  camera.position.set(0, 0, 3)
  camera.lookAt(0, 0, 0)

    //renderer assiated with canvas
  const renderer = new THREE.WebGLRenderer({ canvas })
  renderer.setSize(window.innerWidth, window.innerHeight)

    //created a new cube 
  const cube = new Cube()
    // add cube's mesh to scene
  scene.add(cube.mesh)

    //created a new light with the color white and set intensity to 1
  const pointLight = new THREE.PointLight(0xffffff, 1, 100)
    //set the point light's position
  pointLight.position.set(0, 0, 3)
    //add the point light to scene
  scene.add(pointLight)

    // define the animation 
  function animate() {
    //prebuilt function to request next frame 
    requestAnimationFrame(animate)
    // rotatin of cube on y and x directions
    cube.mesh.rotation.x += 0.01
    cube.mesh.rotation.y += 0.002
    //render the scene with the camera
    renderer.render(scene, camera)
  }
    // call function 
  animate()
}