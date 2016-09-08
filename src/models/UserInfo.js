
import { observable } from 'mobx';
import fetch from './../core/fetch'
// import filter from 'lodash/filter'


class UserInfo {

    @observable id = undefined;
    @observable name = undefined;
    @observable userPreviligy = undefined;
    @observable authorize = undefined;
    @observable news = [];
    @observable loginErr = undefined
    synced = undefined

    update(user) {
        this.id = user.id
        this.name = user.name
        this.userPreviligy = user.userPreviligy
        this.authorize = user.authorize
    }
    // @action
    deleteNewsById(newsid) {
        // require.ensure([], (require) => {
        // const filter = require('lodash/filter');
        this.news = this.news.filter(o => o.id !== newsid);
        // })

        // this.news = this.news.filter(x => x.id !== newsid)
    }

    async fetchNews() {
        // avoid the duplicated requrest from client
        if (this.news.length === 0) {
            const resp = await fetch('http://jsonplaceholder.typicode.com/posts',
                {
                    method: 'get',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
            console.log('browser', process.env.BROWSER);
            const data = await resp.json();
            this.news = data;
            console.log('get data')
            if (!data) throw new Error('Failed to load the news feed.');
        }
    }
    initial(store) {
        this.id = store.id
        this.name = store.name
        this.userPreviligy = store.userPreviligy
        this.authorize = store.authorize
        this.news = store.news
        this.loginErr = store.loginErr
    }

    clear() {
        this.id = undefined;
        this.name = undefined;
        this.userPreviligy = undefined;
        this.authorize = undefined;
        this.news = [];
        this.loginErr = undefined
    }
    syncNow() {
        this.synced = true
    }
    syncRecover() {
        this.synced = false
    }
}

export const userInfo = new UserInfo();
