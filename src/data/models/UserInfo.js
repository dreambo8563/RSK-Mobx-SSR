
import { observable, action } from 'mobx';
import fetch from './../../core/fetch'
import filter from 'lodash/filter'


class UserInfo {

    @observable id;
    @observable name = null;
    @observable userPreviligy = null;
    @observable authorize = false;
    @observable news = [];

    constructor() {
        console.log('constructror')
    }
    update(user) {
        this.id = user.id
        this.name = user.name
        this.userPreviligy = user.userPreviligy
        this.authorize = user.authorize
    }
    @action
    deleteNewsById(newsid) {
        // require.ensure([], (require) => {
        // const filter = require('lodash/filter');
        this.news = filter(this.news, o => o.id !== newsid);
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

}

export const userInfo = new UserInfo();
