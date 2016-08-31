
import { observable } from 'mobx';

class test {
    @observable timerData = {
        secondsPassed: 0,
    }
    noFetch = false

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
}

export const testInstance = new test();
