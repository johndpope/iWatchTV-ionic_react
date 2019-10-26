import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BackToolbar from '../Components/BackToolbar'
import ThumbSlider from '../Components/ThumbSlider';
import YoutubeTrailers from '../Components/YoutubeTrailers';
import propTypes from "prop-types";
import { ShowDetail } from '../Components/ShowDetail';
// import { ShowPlayer } from '../Components/VideoPlayer';
import Cast from '../Components/Cast';
import Seasons from '../Components/Seasons'
import { ShowPlayer } from '../Components/VideoPlayer';

const ShowDetails = ({ match }) => {
    const id = match.params.id;
    var episodeToWatch = 1;
    const [ Url, setUrl ] = useState(``)
    const [show, setShow] = React.useState([])
    async function Fetch(id) {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=046fdb0d753c6903e673934705cb553f&language=en-US`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setShow(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        Fetch(id)
    }, [id])
    let name = show.name;
    const VideoPlayerURL = (id) => {
        setUrl(`https://database.gdriveplayer.us/player.php?type=series&id=${id}&episode=${episodeToWatch}`)
        console.log(Url)
    }
    return (
        <IonPage>
            <BackToolbar title='iWatchTV' />
            <IonContent className="ContentBackground" style={{ textAlign: 'center' }}>
                <ShowDetail show={show} />
                <YoutubeTrailers id={id} type="tv" />
                <ShowPlayer url={Url}/>
                <Seasons show={name} callback={event => VideoPlayerURL(event)}/>
                <Cast id={id} type="tv" />
                <ThumbSlider title={'Similar'} path="tv" url={`https://api.themoviedb.org/3/tv/${id}/similar?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
                <ThumbSlider title={'Recommended'} path="tv" url={`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
            </IonContent>
        </IonPage>
    );
};

export default ShowDetails;



ShowDetails.propTypes = {
    match: propTypes.object
}