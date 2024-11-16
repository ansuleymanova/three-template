import * as THREE from 'three'
import { Behavior } from './Behavior.ts'

export class Light extends Behavior {
  constructor() {
    super()
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(1, 1, 1)
    this.add(directionalLight)
    this.add(new THREE.AmbientLight(0xffffff, 1))
  }
}