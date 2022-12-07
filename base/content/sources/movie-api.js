import { omdbKey } from 'fusion:environment'

const resolve = (props) => {
    const { code, title } = props;
    return `http://www.omdbapi.com/?i=${code}&t=${title}&apikey=${omdbKey}`
}

export default {
    resolve, 
    params: [
        {
            name: 'code',
            displayName: 'Movie Code',
            type: 'text'
        },
        {
            name: 'title',
            displayName: 'Movie Title',
            type: 'text'
        }
    ]
}