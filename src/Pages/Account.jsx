import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Toolbar from '../Components/Toolbar'

const Account = () => {
    return (
        <IonPage>
            <Toolbar title='iWatchTV' />
            <IonContent className="ion-padding" style={{ textAlign: 'center' }}>
                <h4>Account</h4>
            </IonContent>
        </IonPage>
    );
};

export default Account;
