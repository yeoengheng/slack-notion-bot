import axios from 'axios' 

export function getKanye(){
    const promise = axios.get('https://api.kanye.rest/')
    const dataPromise = promise.then(response => response.data.quote)
    return dataPromise
}