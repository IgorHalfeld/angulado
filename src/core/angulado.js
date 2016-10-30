
import Observer from './../observer'

let Angulado = (() => {

  function $inject (...modules) {
    this.$subject = new Observer(obj)
    modules.forEach(mod => {
      this[mod.name] = mod.method
    })
  }

  return {
    $inject
  }
})()

export default Angulado
