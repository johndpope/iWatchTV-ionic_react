import React from 'react'
import { IonCardSubtitle, IonCardTitle, IonImg, IonIcon } from '@ionic/react';
import  NumberFormat  from 'react-number-format';
import { star } from 'ionicons/icons';
import  propTypes  from 'prop-types';

export const MovieDetail = ({ movie }) => {
    return (
        <div>
            <IonImg className="movieBackDrop" src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt="" />
            <img className="moviePoster" src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
            <IonCardTitle class="ion-padding">{movie.title}</IonCardTitle>
            <IonCardSubtitle>Released: {movie.release_date}</IonCardSubtitle>
            <IonCardSubtitle class="ion-padding">{movie.overview}</IonCardSubtitle>
            <IonCardSubtitle>length: {movie.runtime} mins</IonCardSubtitle>
            <IonCardSubtitle>rating: <IonIcon icon={star}></IonIcon> {movie.vote_average}</IonCardSubtitle>
            <NumberFormat value={movie.revenue} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <IonCardSubtitle>revenue: {value}</IonCardSubtitle>}/>
        </div>
    )
}

MovieDetail.propTypes = {
    movie: propTypes.oneOfType([
        propTypes.object.isRequired,
        propTypes.array.isRequired,
      ]),
}