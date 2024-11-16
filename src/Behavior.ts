import * as THREE from 'three'

export class Behavior extends THREE.Group {
  children: THREE.Object3D<THREE.Object3DEventMap>[] | Behavior[] = []
  constructor() {
    super()
  }

  update(delta: number) {
    this.children.forEach(child => {
      if (child instanceof Behavior) {
        child.update(delta)
      }
    })
      this.onUpdate(delta)
  }

  onUpdate(delta: number) {}
}