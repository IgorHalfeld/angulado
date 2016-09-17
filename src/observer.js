
class Observer {

  // Init a empty object
  // ==================
  constructor () {
    this.subs = {}
  }

  // Notify `subscribe` of change
  // ============================
  notify (key) {
    if (!this.subs[key]) return
    this.subs[key].forEach(handler => handler())
  }


  // Register new `subscribe`
  // =======================
  register (key, handler) {
    if (!this.subs[key]) this.subs[key] = []
    this.subs[key].push(handler)
  }
}

export default Observer
