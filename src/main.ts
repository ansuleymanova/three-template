import './style.css'
import {App} from './App.ts'
import {Cube} from './Cube.ts'
import { Light } from './Light.ts'

function main() {
  const element = document.querySelector('#app')!
  const app = new App(element)
  const cube = new Cube()
  const light = new Light()
  app.addBehavior(cube, light)

  app.run()
}

main()