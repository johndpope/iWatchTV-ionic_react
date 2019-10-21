import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar'
import Tabbar from '../Components/Tabbar'
const LiveTV = () => {
    return (
        <IonPage>
            <Toolbar title="iWatchTV" />
            <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
                <h4>Live TV</h4>
            </IonContent>
            <Tabbar/>
        </IonPage>
    );
};

export default LiveTV;
