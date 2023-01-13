import { makeAutoObservable } from "mobx";

class LoaderStatus {
    status = 'loading';

    constructor() {
        makeAutoObservable(this)
    }

    changeStatus() {
        this.status = 'loaded'
    }
}

export default new LoaderStatus();