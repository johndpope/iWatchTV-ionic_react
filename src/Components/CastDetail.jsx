import React from 'react'
import { IonCardSubtitle, IonCardTitle } from '@ionic/react';
import propTypes from 'prop-types';
import Skeleton from 'react-skeleton-loader';

export const CastDetail = ({ cast }) => {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1520)
    }, [loading])
    return (
        loading === true ?
            <div>
                <Skeleton height="35vh" width="100%" widthRandomness="0" /><br /><br /><br />
                <IonCardTitle><Skeleton width="70vw" /></IonCardTitle><br />
                <IonCardSubtitle><Skeleton width="50vw" /></IonCardSubtitle><br />
                <IonCardSubtitle><Skeleton count={9} width="80vw" /></IonCardSubtitle><br />
                <IonCardSubtitle><Skeleton count={3} width="30vw" /></IonCardSubtitle>
            </div>
            :
            <div>
                <div className="BackDropBox">
                    <img className="movieBackDrop" src={'https://image.tmdb.org/t/p/original/' + cast.profile_path} alt="" />
                </div>
                <img className="moviePoster" src={'https://image.tmdb.org/t/p/w500/' + cast.profile_path} alt="" />
                <IonCardTitle class="ion-padding">{cast.name}</IonCardTitle>
                <IonCardSubtitle>Birthday: {cast.birthday}</IonCardSubtitle>
                <IonCardSubtitle>Birth place: {cast.place_of_birth}</IonCardSubtitle>
                <div className="movieOverview" >
                    <IonCardSubtitle class="ion-padding">{cast.biography}</IonCardSubtitle>
                </div>
            </div>
    )
}

CastDetail.propTypes = {
    cast: propTypes.oneOfType([
        propTypes.object.isRequired,
        propTypes.array.isRequired,
    ]),
}