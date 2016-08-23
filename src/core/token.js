let news = 'default'

export const setToken = (n) => {
  news = n
}
export const setTokenFromClient = (n) => {
  news = n
}


export const getToken = () => news
