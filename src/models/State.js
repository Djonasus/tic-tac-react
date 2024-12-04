export default class State {
    constructor(snapshot, XTurn) {
        this.snapshot = snapshot.slice();
        this.XTurn = XTurn;
        this.Time = new Date().toTimeString();
    }

    pull(BAHandler, THandler) {
        BAHandler(this.snapshot)
        THandler(this.XTurn)
    }
}