import { IonContent, IonPage } from '@ionic/react';
import React, { useEffect } from 'react';
import BackToolbar from '../Components/BackToolbar'
import ThumbSlider from '../Components/ThumbSlider';
import YoutubeTrailers from '../Components/YoutubeTrailers';
import propTypes from "prop-types";
import { ShowDetail } from '../Components/ShowDetail';
// import { ShowPlayer } from '../Components/VideoPlayer';
import Cast from '../Components/Cast';
import Seasons from '../Components/Seasons'
//  search: 'https://iwatchtv-backend.firebaseapp.com/api/shows?search=', //https://api.gdriveplayer.us/v1/series/search?title=family%20guy
//  details: 'https://iwatchtv-backend.firebaseapp.com/api/shows/details?search=', //https://api.gdriveplayer.us/v1/series/id/238
//  player: `https://database.gdriveplayer.us//player.php?type=series&id=${this.state.currentSeason.id}&episode=${this.state.currentEpisode.id}`

const ShowDetails = ({ match }) => {
    const id = match.params.id;
    const [show, setShow] = React.useState([])
    async function Fetch(id) {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=046fdb0d753c6903e673934705cb553f&language=en-US`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setShow(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        Fetch(id)
    }, [id])
    let name = show.name;
    const VideoPlayerURL = (props) => {

    }
    return (
        <IonPage>
            <BackToolbar title='iWatchTV' />
            <IonContent className="ContentBackground" style={{ textAlign: 'center' }}>
                <ShowDetail show={show} />
                <YoutubeTrailers id={id} type="tv" />
                {/* <ShowPlayer id={show.imdb_id} episode={'1'} /> */}
                <Seasons show={name} callback={event => VideoPlayerURL(event)}/>
                {/* <Episodes show={show} id={id} /> */}
                
                <Cast id={id} type="tv" />
                <ThumbSlider title={'Similar'} path="show" url={`https://api.themoviedb.org/3/tv/${id}/similar?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
                <ThumbSlider title={'Recommended'} path="show" url={`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=046fdb0d753c6903e673934705cb553f&language=en-US&page=1`} />
            </IonContent>
        </IonPage>
    );
};

export default ShowDetails;

// function calTotalSeasons(seasons) {
//     var total = seasons.length;
//     return Number(total);
// }

// const Episodes = (props) => {
//     const Show = props.show;
//     const [data, setData] = React.useState([{}])
//     const [error, setError] = React.useState(false)
//     const url = `https://iwatchtv-backend.web.app/api/shows?search=`;
//     const name = Show.name;
//     const edited = name.replace("Marvel's", '') + ' - season';
//     var now;
//     if (name.includes("Marvel's")) {
//         now = edited.substring(1, edited.length);
//     } else {
//         now = edited.substring(0, edited.length);
//     }
//     const encodedQuery = encodeURI(now).trim();

//     React.useEffect(() => {
//         fetch(url + encodedQuery)
//             .then(res => { return res.json() })
//             .then(data => { setData(data); console.log(data.Response) })
//             .catch(error => { setError(true); console.log(error) })
//     })

//     return (
//         <div>

//         </div>
//     )
// }


ShowDetails.propTypes = {
    match: propTypes.object
}