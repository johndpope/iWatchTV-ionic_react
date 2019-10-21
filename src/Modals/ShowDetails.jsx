import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar'

const ShowDetails = () => {
    return (
        <IonPage>
            <Toolbar title='iWatchTV' />
            <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
                <h4>Show Details</h4>
            </IonContent>
        </IonPage>
    );
};

export default ShowDetails;
