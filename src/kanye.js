import axios from 'axios' 

export function getKanye(){
    const promise = axios.get('https://my-bao-server.herokuapp.com/api/breadpuns')
    const dataPromise = promise.then(response => response.data.quote)
    return dataPromise
}