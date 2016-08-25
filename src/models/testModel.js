
import { observable } from 'mobx';


class test {
    @observable timerData = {
        secondsPassed: 0,
    }
    @observable noFetch = false

    count() {
        setInterval(() => {
            this.timerData.secondsPassed++
        }, 1000)
    }
    initial(store) {
        this.timerData = store.timerData
    }
}

export const testInstance = new test();
