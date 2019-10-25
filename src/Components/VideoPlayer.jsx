import React from 'react'
import propTypes from 'prop-types';
import { IonCardSubtitle, IonButton, IonButtons } from '@ionic/react'
import Skeleton from 'react-skeleton-loader';

export const MoviePlayer = (props) => {
    let imdb_id = props.id;
    const [stream, setStream] = React.useState(props.stream);
    const [loading, setLoading] = React.useState(true)
    const handleClick = (click) => {
        stream === 1 ? setStream(2) : stream === 2 ? setStream(3) : setStream(1)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1540)
    }, [loading])
    return (
        <div style={{ height: 300, width: '100%', marginBottom: 40 }}>
            <IonCardSubtitle>Movie Player</IonCardSubtitle>
            <IonButtons>
                <IonButton onClick={handleClick}>Change Player</IonButton>
            </IonButtons>
            {
                loading === true ? <Skeleton width="100%" height="100%" heightRandomness="0" widthRandomness="0" borderRadius="15px"/> :
                    stream === 1
                        ?
                        <iframe title={imdb_id} src={`https://database.gdriveplayer.us/player.php?imdb=${imdb_id}`} height={'300px'} width={'100%'} frameBorder="0" loading="lazy" allowFullScreen={true} />
                        :
                        stream === 2
                            ?
                            <iframe title={imdb_id} src={`https://gomostream.com/movie/${imdb_id}`} height={'300px'} width={'100%'} frameBorder='0' loading="lazy" allowFullScreen={true} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms" />
                            :
                            <iframe title={imdb_id} src={`http://movie2konline.net/api/openload.php?id=${imdb_id}`} height={'300px'} width={'100%'} frameBorder='0' loading="lazy" allowFullScreen={true} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms" />
            }
        </div>
    )
}
// export const ShowPlayer = ({episodes}) => {
//     const [loading, setLoading] = React.useState(true)
//     React.useEffect(() => {
//         setTimeout(() => {
//             setLoading(false)
//         }, 1540)
//     }, [loading])
//     return (
//         <div style={{ height: 300, width: '100%', marginBottom: 40 }}>
//             <IonCardSubtitle>Show Player</IonCardSubtitle>
//             {
//                 loading === true ? <Skeleton width="100%" height="100%" heightRandomness="0" widthRandomness="0" /> :
//                     <iframe title={''} src={`https://database.gdriveplayer.us/player.php?type=series&id=${id}&episode=${episode}`} height={'300px'} width={'100%'} frameBorder="0" loading="lazy" allowFullScreen={true} />
//             }
//         </div>
//     )
// }


MoviePlayer.propTypes = {
    id: propTypes.string
}

// ShowPlayer.propTypes = {
//     id: propTypes.string
// }
