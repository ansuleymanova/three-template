import * as THREE from 'three'
import { Behavior } from './Behavior.ts'

export class App {
  private scene = new THREE.Scene()
  private renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
  private camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000)
  private clock = new THREE.Clock()

  private behaviors: Behavior[] = []


  constructor(element: Element) {
    this.renderer.setPixelRatio(window.devicePixelRatio)
    element.appendChild(this.renderer.domElement)
    this.camera.position.set(0, 0, 10)

    this.scene.add(this.camera)

    window.addEventListener('resize', () => this.onResize())
    this.onResize()
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  async run() {
   this.behaviors.forEach(behavior => this.scene.add(behavior))
    this.renderer.setAnimationLoop(() => {
      const delta = this.clock.getDelta()
      this.behaviors.forEach(behavior => behavior.update(delta))

      this.renderer.render(this.scene, this.camera)
    })
  }

  addBehavior(...behavior: Behavior[]) {
    this.behaviors.push(...behavior)
  }

  removeBehavior(behavior: Behavior) {
    this.behaviors = this.behaviors.filter(b => b !== behavior)
  }
}