
import Observer from './observer'

class Angulado {

  // Start the observe function and init subscribes object
  // ====================================================
  constructor (obj) {
    this.$subject = new Observer(obj)
    this.observe(obj)

    // Return `data`
    return {
      data: obj
    }
  }

  // Through each property to turn reactive
  // ======================================
  observe (obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) this.reactive(obj, key)
    }
  }


  // Turn a reactive object
  // ======================
  reactive (obj, key) {
    let val = obj[key]
    let self = this

    Object.defineProperty(obj, key, {
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
    this.parser(obj)
  }

  // Parse the DOM
  // ============
  parser (obj) {
    const nodes = document.querySelectorAll('[ang-bind]')

    nodes.forEach(node => {
      let key = node.attributes['ang-bind'].value

      // Start with `data` value
      node.textContent = obj[key]

      // Register `notify`
      this.$subject.register(key, () => node.textContent = obj[key])
    })
  }

}

export default Angulado
