import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import BackToolbar from '../Components/BackToolbar'
import ThumbSlider from '../Components/ThumbSlider';
import propTypes from "prop-types";
import { CastDetail } from '../Components/CastDetail';
// import { PicturePlayer } from '../Components/PicturePlayer';

const CastDetails = ({ match }) => {
    const id = match.params.id;
    const [cast, setCast] = React.useState(Array)

    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/person/${id}?api_key=046fdb0d753c6903e673934705cb553f&language=en-US`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCast(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])
    return (
        <IonPage>
            <BackToolbar title='iWatchTV' />
            <IonContent className="ContentBackground" style={{ textAlign: 'center' }}>
                {/* {id} */}
                <CastDetail cast={cast} />
                {/* <PicturePlayer id={cast.imdb_id} /> */}
                <ThumbSlider title={'Movie Credits'} url={`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
                <ThumbSlider title={'TV Credits'} url={`https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
            </IonContent>
        </IonPage>
    );
};

CastDetails.propTypes = {
    match: propTypes.object
}

export default CastDetails;
