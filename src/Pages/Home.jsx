import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar';
import Slider from '../Components/Slider';
import ThumbSlider from '../Components/ThumbSlider';
import { randomNum } from '../Utils/Utilities';
// import Footer from '../Components/Footer'

// const ran1 = randomNum(1, 5)
const ran2 = randomNum(1, 5)

const Home = () => {
    return (
        <IonPage>
            <Toolbar title='iWatchTV' />
            <IonContent class="noScrollbar" style={{ textAlign: 'center' }}>
                <Slider url={`https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Popular'} path="movie" url={`https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Popular Shows'} path="show" url={`https://api.themoviedb.org/3/tv/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Top rated'} path="movie" url={`https://api.themoviedb.org/3/movie/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Top rated Shows'} path="show" url={`https://api.themoviedb.org/3/tv/top_rated?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Upcoming'} path="movie" url={`https://api.themoviedb.org/3/movie/upcoming?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Shows On The Air'} path="show" url={`https://api.themoviedb.org/3/tv/on_the_air?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Now Playing'} path="movie" url={`https://api.themoviedb.org/3/movie/now_playing?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
                <ThumbSlider title={'Shows Airing Today'} path="show" url={`https://api.themoviedb.org/3/tv/airing_today?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${randomNum(1, ran2)}`} />
            </IonContent>
        </IonPage>
    );
};

export default Home;
