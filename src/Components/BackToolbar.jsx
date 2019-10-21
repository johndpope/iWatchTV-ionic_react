import { IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton } from '@ionic/react';
import React, {useState, useCallback, useEffect } from 'react';
import { home, arrowBack, logoYoutube } from 'ionicons/icons';
import { isMobile, mobileVendor, mobileModel } from "react-device-detect";

const BackToolbar = (props) => {
    const [style, setStyle] = useState({});
    const [title, setTitle] = useState(''); // fixed
    const ScreenWidth = window.screen.width;
    const ScreenHeight = window.screen.height;
    const hLength = window.history.length;
    function goBack() {
        if (hLength === 2 || hLength >= 1) {
            window.history.back()
        }
    }
    const FixSafeArea = useCallback(() => {
        if (isMobile === true && mobileVendor === 'Apple' && mobileModel === 'iPhone') {
            if (ScreenHeight === 812 || ScreenWidth === 812) {
                setStyle({ paddingTop: 33, paddingBottom: 0, })
            }
            if (ScreenHeight === 896 || ScreenWidth === 896) {
                setStyle({ paddingTop: 33, paddingBottom: 0, })
            }
            if (ScreenHeight === 667 || ScreenWidth === 667) {
                setStyle({ paddingTop: 20, paddingBottom: 0, })
            }
            if (ScreenHeight === 736 || ScreenWidth === 736) {
                setStyle({ paddingTop: 20, paddingBottom: 0, })
            }
            if (ScreenHeight === 568 || ScreenWidth === 812) {
                setStyle({ paddingTop: 10, paddingBottom: 0, })
            }
        }
        setTitle(props.title)
    }, [ScreenHeight, ScreenWidth, props])

    useEffect(() => {
        FixSafeArea();
    }, [FixSafeArea]);

    return (
        <IonHeader >
            <IonToolbar color="primary" style={style}>
                <IonButtons slot="start">
                    <NavButton path={'home'} icon={home} />
                    <NavButton path={'movies'} icon={logoYoutube} />
                </IonButtons>
                <Title value={title} />
                <IonButtons slot="end">
                    <IonButton onClick={goBack}>
                        <IonIcon slot="icon-only" icon={arrowBack} /> Back
                </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};


const NavButton = ({ path, icon }) => {
    return (
        <IonButton slot="icon-only" href={'/' + path}>
            <IonIcon slot="icon-only" icon={icon} />
        </IonButton>
    )
}

const Title = ({ value }) => {
    return (
        <IonTitle>{value}</IonTitle>
    )
}

export default BackToolbar;
