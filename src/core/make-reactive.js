
import Angulado from './angulado'

let MakeReactive = {
  name: 'MakeReactive',
  method (ob, key) {
    let val = ob[key]
    let self = this

    Object.defineProperty(ob, key, {
      get () {
        return val
      },
      set (newVal) {
        val = newVal

        // Update the View
        self.$subject.notify(key)
      }
    })

    // Call parser
    Angulado.parser(ob)
  }
}

Angulado.$inject(MakeReactive)

export default MakeReactive
