import { IonContent, IonPage, IonCardTitle } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar'
import Tabbar from '../Components/Tabbar'
import ThumbSlider from '../Components/ThumbSlider';
const Movies = () => {
    return (
        <IonPage>
            <Toolbar title="iWatchTV" />
            <IonContent className="ion-padding noScrollbar" style={{ textAlign: 'center' }}>
                <IonCardTitle>Movies</IonCardTitle>
                <ThumbSlider title={'Popular'} url={`https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${'1'}`} />
                <ThumbSlider title={'Now Playing'} url={`https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${'1'}`} />
                <ThumbSlider title={'Top Rated'} url={`https://api.themoviedb.org/3/movie/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${'1'}`} />
            </IonContent>
            <Tabbar/>
        </IonPage>
    );
};

export default Movies;
