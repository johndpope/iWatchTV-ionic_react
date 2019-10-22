import React from 'react'
import { IonCardSubtitle } from '@ionic/react';
import Skeleton from 'react-skeleton-loader';

const YoutubeTrailers = (props) => {
    const id = props.id;
    const [videos, setVideos] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=046fdb0d753c6903e673934705cb553f&language=en-US`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setVideos(data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])
    return (
        loading === true ?
            <div style={{ paddingTop: 40, paddingBottom: 20 }}>
                <IonCardSubtitle>Trailers</IonCardSubtitle>
                <div className="trailers noScrollbar">
                    <div style={{ margin: 10 }}>
                        <Skeleton width="30vw" height="15vh" widthRandomness="0" heightRandomness="0" />
                    </div>
                    <div style={{ margin: 10 }}>
                        <Skeleton width="30vw" height="15vh" widthRandomness="0" heightRandomness="0" />
                    </div>
                    <div style={{ margin: 10 }}>
                        <Skeleton width="30vw" height="15vh" widthRandomness="0" heightRandomness="0" />
                    </div>
                </div>
            </div>
            :
            videos.length !== 0 ?
                <div style={{ paddingTop: 40, paddingBottom: 20 }}>
                    <IonCardSubtitle>Trailers</IonCardSubtitle>
                    <div className="trailers noScrollbar">
                        {videos.map(({ key, id }) => (
                            <iframe key={key} title={id} width="120vw" height="120vh" frameBorder='0' style={{ padding: 5 }}
                                src={'https://www.youtube.com/embed/' + key}>
                            </iframe>
                        ))}
                    </div>
                </div>
                : <IonCardSubtitle>no trailers available</IonCardSubtitle>
    )

}

export default YoutubeTrailers;