
import { observable } from 'mobx';
import fetch from './../core/fetch'
// import filter from 'lodash/filter'


class UserInfo {

    @observable id;
    @observable name = undefined;
    @observable userPreviligy = undefined;
    @observable authorize = undefined;
    @observable news = undefined;
    @observable loginErr = undefined
    noFetch = undefined

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
        this.initial({});
    }
}

export const userInfo = new UserInfo();
