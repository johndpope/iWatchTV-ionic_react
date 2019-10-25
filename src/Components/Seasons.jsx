import { IonCardSubtitle,IonList,IonItem,IonThumbnail, IonLabel  } from '@ionic/react';
import React, { useEffect } from 'react';
import propTypes from "prop-types";
// import { ShowDetail } from '../Components/ShowDetail';
// import { ShowPlayer } from '../Components/VideoPlayer';
// import Cast from '../Components/Cast';

var loaded = false;
// var seasonsID = null;

const Seasons = (props) => {
    var name = String(props.show).toString();
    // var nameee = String(props.show).toString();
    const [data, setData] = React.useState([])
    const [error, setError] = React.useState(false)
    const [Err, setErr] = React.useState({})
    var url = 'https://iwatchtv-backend.web.app/api/shows?search=';
    var edited = name.replace("Marvel's", '') + ' - season';
    var now;
    if (name.includes("Marvel's")) {
        now = edited.substring(1, edited.length);
    } else {
        now = edited.substring(0, edited.length);
    }
    var encodedQuery = encodeURI(now).trim();
    useEffect(() => {
        fetch(url + encodedQuery)
        .then(res => { return res.json() })
        .then(data => setData(data.Response))
        .catch(err => { setErr(err); setError(true); console.log(error, Err) })
    }, [data, encodedQuery, url, name, Err, error])
    setTimeout(() => {
        loaded = true;
    }, 2500)
    return (
        <div>
    <IonCardSubtitle style={{paddingTop: 10}}>Seasons</IonCardSubtitle>
        <IonList style={{height: 300, overflowY: 'scroll'}}>
        {loaded === true ?
            data.map((season) => {
                // var name = String(season.title).toString();
                return (
                    <IonItem key={season.id} data-id={season.id} onClick={click => SelectSeason(season.id, season.title)}>
                        <IonThumbnail slot="start"> <img className="seasonImg" src={season.poster} alt="no" style={{boderRadius:'20px'}} /> </IonThumbnail>
                        <IonLabel><IonCardSubtitle>{season.title}</IonCardSubtitle></IonLabel>
                    </IonItem>
                )
            }) 
            : <div>Loading</div>}
         </IonList>
         </div>
    )
    async function SelectSeason(id, title) {
        
    }
            
}
Seasons.propTypes = {
    show: propTypes.string
}
export default Seasons

// const Episodes = (id) => {

//     return (
//         <div>

//         </div>
//     )
// }