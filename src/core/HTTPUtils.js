import fetch from './fetch'

const HEADERWITHJSON = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const getBase = async (url, header) => {
    const resp = await fetch(url, header);
    const data = await resp.json();
    return data
}

export const postBase = async (url, postHeader, postBody) => {
    const resp = await fetch(url, {
        method: 'post',
        header: postHeader,
        body: postBody,
    });
    const data = await resp.json();
    return data
}

export const httpGetJSON = (url) => getBase(url, HEADERWITHJSON)
export const httpPostJSON = (url, body) => postBase(url, HEADERWITHJSON, JSON.stringify(body))

