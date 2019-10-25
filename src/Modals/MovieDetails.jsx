import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BackToolbar from '../Components/BackToolbar'
import ThumbSlider from '../Components/ThumbSlider';
import YoutubeTrailers from '../Components/YoutubeTrailers';
import propTypes from "prop-types";
import { MovieDetail } from '../Components/MovieDetail';
import { MoviePlayer } from '../Components/VideoPlayer';
import Cast from '../Components/Cast';

const MovieDetails = ({ match }) => {
    const id = match.params.id;
    const [movie, setMovie] = React.useState([])
    async function Fetch(id){
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=046fdb0d753c6903e673934705cb553f&language=en-US`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setMovie(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    React.useEffect(() => {
        Fetch(id)
    }, [id])
    return (
        <IonPage>
            <BackToolbar title='iWatchTV' />
            <IonContent className="ContentBackground" style={{ textAlign: 'center' }}>
                <MovieDetail movie={movie} />
                <YoutubeTrailers id={id} type="movie"  />
                <MoviePlayer stream={1} id={movie.imdb_id} />
                <Cast id={id} type={'movie'} />
                <ThumbSlider title={'Similar'} path="movie" url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
                <ThumbSlider title={'Recommended'} path="movie" url={`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
            </IonContent>
        </IonPage>
    );
};

MovieDetails.propTypes = {
    match: propTypes.object
}

export default MovieDetails;
