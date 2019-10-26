import React from 'react'
import propTypes from 'prop-types';
import { IonCardSubtitle, IonButton, IonButtons } from '@ionic/react'
import Skeleton from 'react-skeleton-loader';


export const MoviePlayer = (props) => {
    var loaded = false;
    let imdb_id = props.id;
    const [stream, setStream] = React.useState(props.stream);
    const [loading, setLoading] = React.useState(true)
    const handleClick = (click) => {
        stream === 1 ? setStream(2) : stream === 2 ? setStream(3) : setStream(1)
    }
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            
        }, 1540)
    }, [loading])
    loaded = true;
    return (
        <div style={{ height: 300, width: '100%', marginBottom: 40 }}>
            <IonCardSubtitle>Movie Player</IonCardSubtitle>
            <IonButtons>
                <IonButton onClick={handleClick}>Change Player</IonButton>
            </IonButtons>
            {
                loading === false && loaded === true  ? 
                    stream === 1 ?
                    <iframe title={imdb_id} src={`https://database.gdriveplayer.us/player.php?imdb=${imdb_id}`} height={'300px'} width={'100%'} frameBorder="0" loading="lazy" allowFullScreen={true} />  :
                    stream === 2 ?
                    <iframe title={imdb_id} src={`https://gomostream.com/movie/${imdb_id}`} height={'300px'} width={'100%'} frameBorder='0' loading="lazy" allowFullScreen={true} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms" /> :
                    <iframe title={imdb_id} src={`http://movie2konline.net/api/openload.php?id=${imdb_id}`} height={'300px'} width={'100%'} frameBorder='0' loading="lazy" allowFullScreen={true} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms" /> :
                <Skeleton width="100%" height="100%" heightRandomness="0" widthRandomness="0" borderRadius="15px" /> 
                    
            }
        </div>
    )
}

export const ShowPlayer = ({ url }) => {
    var loaded = false;
    const [loading, setLoading] = React.useState(true)
    let Url = url;
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1600)
    }, [loading])
    loaded = true;
    return (
        <div style={{ height: 300, width: '100%', marginBottom: 40 }}>
            <IonCardSubtitle>Show Player</IonCardSubtitle>
            {
                loading === false && loaded === true && Url !== undefined ?
                    <iframe title={Url} src={Url} height={'300px'} width={'100%'} frameBorder="0" loading="lazy" allowFullScreen={true} /> :
                    <Skeleton width="100%" height="100%" heightRandomness="0" widthRandomness="0" />
            }
        </div>
    )
}


MoviePlayer.propTypes = {
    id: propTypes.string
}

// ShowPlayer.propTypes = {
//     id: propTypes.string
// }
