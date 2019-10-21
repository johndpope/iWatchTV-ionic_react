import { IonIcon, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import { star } from 'ionicons/icons'
import propTypes from "prop-types";

const Thumbnails = (props) => {
    const [state, setState] = React.useState({ movies: [], error: false })
    let url = props.url;
    React.useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setState({ movies: data.results });
            })
            .catch(error => {
                setState({ error: true });
            });
    }, [url])

    return state.movies.length !== 0 ?
        state.movies.map(({ title, id, vote_average, release_date, poster_path }) => (
            <div key={id} className=''>
                <div className='thumbCard'>
                    <a href={`/movie/` + id}>
                        <h5 className='thumbTitle noScrollbar'>{title}</h5>
                        <img className='thumbImg' src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={id} />
                        <h6 className='thumbDate'>{release_date}</h6>
                        <h6 className='thumbVote'><IonIcon icon={star} />{vote_average}</h6>
                    </a>
                </div>
            </div>
        )) : <div> <IonCardTitle style={{ marginTop: 100,  marginLeft: 150 }}>No Movies</IonCardTitle></div>
}

const ThumbSlider = (props) => {
    let url = props.url;
    let title = props.title;
    return url !== '' ?
        <div>
            <IonCardSubtitle style={{ marginBottom: -15, paddingTop: 20 }}>{title}</IonCardSubtitle>
            <div className='thumbSlider noScrollbar'>
                <Thumbnails url={url} />
            </div>
        </div>
        :
        <IonCardSubtitle>No URL Available</IonCardSubtitle>

}

ThumbSlider.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}
Thumbnails.propTypes = {
    url: propTypes.string.isRequired
}

export default ThumbSlider;
