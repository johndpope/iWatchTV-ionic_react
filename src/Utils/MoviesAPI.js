import { useState } from 'react'

const MoviesAPI = (props) => {

    const [state, setState] = useState({
        movies: []
    })

    let url = props.url;
    fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setState(data)
        })

    return state.movies
}

export default MoviesAPI