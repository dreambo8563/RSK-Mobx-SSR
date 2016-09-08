import { userInfo } from './UserInfo';
import { testInstance } from './testModel';
// import { toJS } from 'mobx'

let HTMLStore = undefined;

// const syncStore = toJS(initialStore)

// export const updateStore = (store) => {
//     syncStore = store
// }
const initialStore = {
    userInfo,
    testInstance,
};
export const updateHTMLStore = (store) => {
    HTMLStore = store
}

export const getStore = () => initialStore;
export const clearStore = () => {
    if (!!initialStore) {
        Object.keys(initialStore).forEach(key => {
            initialStore[key].clear()
        })
    }
}
export const isPropDefault = (prop) => {
    if (!prop || (Object.keys(prop).length === 0)) {
        return true
    }
    return false
}

export const isStoreDefault = (store) =>
    (Object.keys(store).map(key => {
        if (isPropDefault(store[key])) {
            return false
        }
        return true
    }).filter(x => x).length === 0)


export const syncStoreStates = () => {
    if (!!HTMLStore) {
        Object.keys(HTMLStore).forEach(key => {
            // console.log('checking the key: ', HTMLStore[key])
            if (!!HTMLStore[key]) {
                // console.log('client store check, we have ', key)
                // console.log("initialStore", initialStore)
                // console.log("HTMLStore", HTMLStore)

                if (!isStoreDefault(HTMLStore[key])) {
                    initialStore[key].syncNow()
                    initialStore[key].initial(HTMLStore[key])
                }
            }
        })
        HTMLStore = undefined
    }
}
