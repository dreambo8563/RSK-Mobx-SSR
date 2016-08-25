let syncStore = undefined;
export const updateStore = (store) => {
    syncStore = store
}

export const getStore = () => syncStore;
export const clearStore = () => { syncStore = undefined }
