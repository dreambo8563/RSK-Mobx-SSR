
import { observable } from 'mobx';

class test {
    @observable timerData = {
        secondsPassed: 0,
    }
    synced = false

    count() {
        setInterval(() => {
            this.timerData.secondsPassed++
        }, 1000)
    }
    initial(store) {
        this.timerData = store.timerData
    }
    clear() {
        this.initial({});
    }
    syncNow() {
        this.synced = true
    }
    syncRecover() {
        this.synced = false
    }
}

export const testInstance = new test();
