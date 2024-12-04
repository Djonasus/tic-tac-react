export default class StateManager {
    constructor(StatePool, stateHandler) {
        this.StatePool = StatePool.slice()
        this.stateHandler = stateHandler
    }

    add(snapshot) {
        this.StatePool.push(snapshot)
        this.stateHandler(this.StatePool)
    }

    clear() {
        this.StatePool = new Array()
        this.stateHandler(this.StatePool)
    }
}