import React from 'react'
import propTypes from 'prop-types';
import { IonCardSubtitle, IonButton, IonButtons } from '@ionic/react'
import ContentLoader from 'react-content-loader'


export const VideoPlayer = (props) => {
    let imdb_id = props.id;
    const [stream, setStream] = React.useState(props.stream);
    const [loading, setLoading ] = React.useState(true)
    const handleClick = (click) => {
        stream === 1 ? setStream(2) : setStream(1)
    }
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [loading])
    
    return (
        <div style={{ height: 300, width: '100%', marginBottom: 40 }}>
            <IonCardSubtitle>Movie Player</IonCardSubtitle>
            <IonButtons>
                <IonButton onClick={handleClick}>Change Player</IonButton>
            </IonButtons>
            {
                loading === true ? <Loading /> :
                stream === 1 ?
                <iframe title={imdb_id} src={`https://database.gdriveplayer.us/player.php?imdb=${imdb_id}`} 
                height={'300px'} width={'100%'}
                loading="lazy"
                allowFullScreen={true}
                frameBorder="0" />
                :
                stream === 2 ?
                <iframe title={imdb_id} src={`https://gomostream.com/movie/${imdb_id}`} height={'300px'} width={'100%'} frameBorder='0' loading="lazy" allowFullScreen={true} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms" />
                :
                <iframe title={imdb_id} src={`http://movie2konline.net/api/openload.php?id=${imdb_id}`} height={'300px'} width={'100%'} frameBorder='0' loading="lazy" allowFullScreen={true} sandbox="allow-scripts allow-same-origin allow-top-navigation allow-forms"/>
            }
        </div>
    )
}

VideoPlayer.propTypes = {
    id: propTypes.string.isRequired
}


const Loading = () => (
    <ContentLoader>
      {/* Only SVG shapes */}    
      {/* <rect x="0" y="0" rx="5" ry="5" width="70" height="70" /> */}
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
      {/* <rect x="80" y="40" rx="3" ry="3" width="250" height="10" /> */}
    </ContentLoader>
  )