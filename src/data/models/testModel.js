
import { observable } from 'mobx';


export class test {
      @observable timerData = {
    secondsPassed: 0,
}

count() {
setInterval(() => {
    this.timerData.secondsPassed++
}, 1000)
}
}

export const testInstance = new test();
