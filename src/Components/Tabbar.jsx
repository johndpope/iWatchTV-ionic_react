import { IonIcon, IonTabBar, IonTabButton } from '@ionic/react';
import React, { useState, useEffect, useCallback } from 'react';
import { film, easel, tv, happy, basketball, walk, logoYoutube, person, home } from 'ionicons/icons';
import { isMobile, mobileVendor, mobileModel } from "react-device-detect";

const Tabs = [
    { path: 'movies', icon: 'film', name: 'Movies' },
    { path: 'shows', icon: 'easel', name: 'Shows' },
    { path: 'livetv', icon: 'tv', name: 'Live TV' },
    { path: 'kids', icon: 'happy', name: 'Kids' },
    { path: 'anime', icon: 'walk', name: 'Anime' },
    { path: 'sports', icon: 'basketball', name: 'Sports' }
]

const Tabbar = (props) => {
    const [style, setStyle] = useState({});
    const width = window.screen.width;
    const height = window.screen.height;
    const FixSafeArea = useCallback(() => {
        if (isMobile === true && mobileVendor === 'Apple' && mobileModel === 'iPhone') {
            if (height === 812 || width === 812) {
                setStyle({ paddingTop: 0, paddingBottom: 30, textAlign: 'center' })
            }
            if (height === 896 || width === 896) {
                setStyle({ paddingTop: 0, paddingBottom: 30, textAlign: 'center' })
            }
        }
    }, [height, width])
    useEffect(() => {
        FixSafeArea();
    }, [FixSafeArea]);
    return (
        <IonTabBar color="primary" style={style} slot="bottom">
            {RenderTabs({ tabs: Tabs })}
        </IonTabBar>
    );
};

const RenderTabs = (props) => {
    let tabs = props.tabs;
    return tabs.map(tab => (
        <IonTabButton key={tab.path} tab={tab.path} href={"/" + tab.path}>
            <RenderIcon icon={tab.icon} />
            {tab.name}
        </IonTabButton>
    ))
}

const RenderIcon = ({ icon }) => {
    return (
        icon === 'film' ?
            <IonIcon icon={film} />
            : icon === 'easel' ?
                <IonIcon icon={easel} />
                : icon === 'tv' ?
                    <IonIcon icon={tv} />
                    : icon === 'happy' ?
                        <IonIcon icon={happy} />
                        : icon === 'walk' ?
                            <IonIcon icon={walk} />
                            : icon === 'basketball' ?
                                <IonIcon icon={basketball} />
                                : icon === 'person' ?
                                    <IonIcon icon={person} />
                                    : icon === 'home' ?
                                        <IonIcon icon={home} />
                                        : icon === 'logoYoutube' ?
                                            <IonIcon icon={logoYoutube} />
                                            : null
    )
}

export default Tabbar;
