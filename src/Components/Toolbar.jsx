import { IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton } from '@ionic/react';
import React, { useEffect, useState, useCallback } from 'react';
import { home, person, logoYoutube, search } from 'ionicons/icons';
import { isMobile, mobileVendor, mobileModel } from "react-device-detect";

const Toolbar = (props) => {
    const [style, setStyle] = useState({});
    const [title, setTitle] = useState(''); // fixed
    const width = window.screen.width;
    const height = window.screen.height;

    const FixSafeArea = useCallback(() => {
        if (isMobile === true && mobileVendor === 'Apple' && mobileModel === 'iPhone') {
            if (height === 812 || width === 812) {
                setStyle({ paddingTop: 33, paddingBottom: 0, })
            }
            if (height === 896 || width === 896) {
                setStyle({ paddingTop: 33, paddingBottom: 0, })
            }
            if (height === 667 || width === 667) {
                setStyle({ paddingTop: 20, paddingBottom: 0, })
            }
            if (height === 736 || width === 736) {
                setStyle({ paddingTop: 20, paddingBottom: 0, })
            }
            if (height === 568 || width === 812) {
                setStyle({ paddingTop: 10, paddingBottom: 0, })
            }
        }
        setTitle(props.title)
    }, [height, width, props])

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
                <IonTitle>{title}</IonTitle>
                <IonButtons slot="end">
                    <NavButton path={'account'} icon={person} />
                    <NavButton path={'search'} icon={search} />
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};


const NavButton = ({ path, icon }) => (
    <IonButton slot="icon-only" href={'/' + path}>
        <IonIcon slot="icon-only" icon={icon} />
    </IonButton>
)


export default Toolbar;
