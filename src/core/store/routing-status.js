import { makeAutoObservable } from "mobx";

class RoutingStatus {
    routing = false;

    constructor() {
        makeAutoObservable(this)
    }

    changeRoutingStatus() {
        this.routing = !this.routing
    }
}

export default new RoutingStatus();