import { IonCardSubtitle, IonList, IonItem, IonThumbnail, IonLabel, IonSkeletonText } from '@ionic/react';
import React, { useEffect } from 'react';
import propTypes from "prop-types";
// import { ShowDetail } from '../Components/ShowDetail';
// import { ShowPlayer } from '../Components/VideoPlayer';
// import Cast from '../Components/Cast';
import { randomNum } from '../Utils/Utilities';

var loaded = false;
// var seasonsID = null;

const Seasons = (props) => {
    const callback = props.callback;
    var name = String(props.show).toString();
    var number = [1, 2, 3, 4, 5]
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
            <IonCardSubtitle style={{ paddingTop: 10 }}>Seasons</IonCardSubtitle>
            <IonList style={{ height: 300, overflowY: 'scroll' }}>
                {loaded === true && data ?
                    data.map((season) => {
                        // var name = String(season.title).toString();
                        return (
                            <IonItem key={season.id} data-id={season.id} onClick={() => callback(season.id)}>
                                <IonThumbnail slot="start"> <img className="seasonImg" src={season.poster} alt="no" style={{ boderRadius: '20px' }} /> </IonThumbnail>
                                <IonLabel><IonCardSubtitle>{season.title}</IonCardSubtitle></IonLabel>
                            </IonItem>
                        )
                    })
                    :
                    <div>
                        {number.map(() => (
                            <IonItem key={randomNum(1, 1000)}>
                                <IonThumbnail slot="start">
                                    <IonSkeletonText animated />
                                </IonThumbnail>
                                <IonLabel>
                                    <h3>
                                        <IonSkeletonText animated style={{ width: '80%' }} />
                                    </h3>
                                </IonLabel>
                            </IonItem>
                        ))}
                    </div>
                }
            </IonList>
        </div>
    )


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