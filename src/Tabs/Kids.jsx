import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar'
import Tabbar from '../Components/Tabbar'
import ThumbSlider from '../Components/ThumbSlider';
const Kids = () => {
    return (
        <IonPage>
            <Toolbar title="iWatchTV" />
            <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
                <h4>Kids</h4>
                <ThumbSlider url={`https://api.themoviedb.org/3/movie/popular?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=${'1'}`} />
            </IonContent>
            <Tabbar/>
        </IonPage>
    );
};

export default Kids;
