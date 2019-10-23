import React from 'react'
import { IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import NumberFormat from 'react-number-format';
import { star } from 'ionicons/icons';
import propTypes from 'prop-types';
import Skeleton from 'react-skeleton-loader';

export const MovieDetail = ({ movie }) => {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }, [loading])
    return (
        loading === true ?
            <div>
                <Skeleton height="35vh" width="100%" widthRandomness="0" /><br /><br /><br />
                <IonCardTitle><Skeleton width="70vw" /></IonCardTitle><br />
                <IonCardSubtitle><Skeleton width="50vw" /></IonCardSubtitle><br />
                <IonCardSubtitle><Skeleton count={10} width="80vw" /></IonCardSubtitle><br />
                <IonCardSubtitle><Skeleton count={3} width="30vw" /></IonCardSubtitle>

            </div>
            :
            <div>
                <div className="BackDropBox">
                    <img className="movieBackDrop" src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt="" /> 
                </div>
                <img className="moviePoster" src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
                <IonCardTitle class="ion-padding">{movie.title}</IonCardTitle>
                <IonCardSubtitle>Released: {movie.release_date}</IonCardSubtitle>
                <IonCardSubtitle class="ion-padding">{movie.overview}</IonCardSubtitle>
                <IonCardSubtitle>length: {movie.runtime} mins</IonCardSubtitle>
                <IonCardSubtitle>rating: <IonIcon icon={star}></IonIcon> {movie.vote_average}</IonCardSubtitle>
                <NumberFormat value={movie.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <IonCardSubtitle>revenue: {value}</IonCardSubtitle>} />
            </div>
    )
}

MovieDetail.propTypes = {
    movie: propTypes.oneOfType([
        propTypes.object.isRequired,
        propTypes.array.isRequired,
    ]),
}