import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar'

const SportDetails = () => {
    return (
        <IonPage>
            <Toolbar title='iWatchTV' />
            <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
                <h4>Sport Details</h4>
            </IonContent>
        </IonPage>
    );
};

export default SportDetails;
