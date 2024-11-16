import * as THREE from 'three'
import { Behavior } from './Behavior.ts'


export class Cube extends Behavior{
  private mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial())
  constructor() {
    super()
    this.add(this.mesh)
  }

  onUpdate(delta: number) {
    this.mesh.rotation.x += delta
    this.mesh.rotation.y += delta
    this.mesh.rotation.z += delta
  }
}