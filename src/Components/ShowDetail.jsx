import React from 'react'
import { IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';
import propTypes from 'prop-types';
import Skeleton from 'react-skeleton-loader';

export const ShowDetail = ({ show }) => {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1520)
    }, [loading])
    return (
        loading === true  ?
            <div>
                <Skeleton height="35vh" width="100%" widthRandomness="0" /><br /><br /><br />
                <IonCardTitle><Skeleton width="70vw" /></IonCardTitle><br />
                <IonCardSubtitle><Skeleton width="50vw" /></IonCardSubtitle><br />
                <IonCardSubtitle><Skeleton count={9} width="80vw" /></IonCardSubtitle><br />
                <IonCardSubtitle><Skeleton count={4} width="30vw" /></IonCardSubtitle>

            </div>
            :
            <div>
                <div className="BackDropBox">
                    <img className="movieBackDrop" src={'https://image.tmdb.org/t/p/original/' + show.backdrop_path} alt="" /> 
                </div>
                <img className="moviePoster" src={'https://image.tmdb.org/t/p/w500/' + show.poster_path} alt="" />
                <IonCardTitle class="ion-padding">{show.name}</IonCardTitle>
                <IonCardSubtitle>Released: {show.first_air_date}</IonCardSubtitle>
                <div className="movieOverview" >
                    <IonCardSubtitle class="ion-padding">{show.overview}</IonCardSubtitle>
                </div>
                <IonCardSubtitle>Seasons: {show.number_of_seasons}</IonCardSubtitle>
                <IonCardSubtitle>Episodes: {show.number_of_episodes}</IonCardSubtitle>
                <IonCardSubtitle>Language: {show.original_language}</IonCardSubtitle>
                <IonCardSubtitle>rating: <IonIcon icon={star}></IonIcon> {show.vote_average}</IonCardSubtitle>
                {/* <NumberFormat value={show.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <IonCardSubtitle>revenue: {value}</IonCardSubtitle>} /> */}
            </div>
    )
}

ShowDetail.propTypes = {
    show: propTypes.oneOfType([
        propTypes.object.isRequired,
        propTypes.array.isRequired,
    ]),
}