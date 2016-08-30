let syncStore = undefined;
export const updateStore = (store) => {
    syncStore = store
}

export const getStore = () => syncStore;
export const clearStore = () => {
    if (!!syncStore) {
        Object.keys(syncStore).forEach(key => {
            syncStore[key].clear()
        })
        syncStore = undefined
    }
}
