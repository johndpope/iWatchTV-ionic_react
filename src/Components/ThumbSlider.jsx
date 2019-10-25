import { IonIcon, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import { star } from 'ionicons/icons'
import propTypes from "prop-types";
import { randomNum } from '../Utils/Utilities';
import Skeleton from 'react-skeleton-loader';

const Thumbnails = (props) => {
    const [loading, setLoading] = React.useState(true)
    const [state, setState] = React.useState({ data: [], error: false })
    let url = props.url;
    let path = props.path;
    const number = [{}, {}, {}, {}, {}];
    async function Fetch(url) {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.results !== undefined ?
                setState({ data: data.results })
                :
                data.cast !== undefined ?
                    setState({ data: data.cast })
                    : setState({ data: [] })
        })
        .catch(error => {
            setState({ error: true });
        });
    }
    React.useEffect(() => {
        Fetch(url);
        setTimeout(() => {
            setLoading(false)
        }, 1510)
    }, [loading, url])
    var image;
    return (
        loading === true ?
            number.map(() => (
                <div key={randomNum(0, 999999)} className=''>
                    <div className='thumbCard'>
                        <div>
                            <h5 className='noScrollbar'><Skeleton width="20vw" /></h5>
                            <Skeleton height="17vh" width="22vw" widthRandomness="0" heightRandomness="0" borderRadius="10px" /><br />
                            <h6 className='thumbDate'><Skeleton width="20vw" /></h6>
                            <h6 className='thumbVote'><Skeleton width="15vw" /></h6>
                        </div>
                    </div>
                </div>
            ))
            :
            state.data !== null && state.data[0] !== null ?
                state.data.map(({ title, name, id, vote_average, release_date, poster_path, backdrop_path }) => {
                    poster_path === null && backdrop_path !== null ? image = backdrop_path : poster_path === null && backdrop_path === null ? image = null : image = poster_path;
                    return image !== null ?
                        <div key={id} className=''>
                            <div className='thumbCard'>
                                <a href={`/${path}/` + id}>
                                    <h5 className='thumbTitle noScrollbar'>{title || name}</h5>
                                    <img className='thumbImg' src={"https://image.tmdb.org/t/p/w500/" + image} alt={id} />
                                    <h6 className='thumbDate'>{release_date}</h6>
                                    <h6 className='thumbVote'><IonIcon icon={star} />{vote_average}</h6>
                                </a>
                            </div>
                        </div> : null

                }) : <IonCardTitle style={{ marginLeft: '34%', marginTop: 100 }}>No Data</IonCardTitle>
    )
}

const ThumbSlider = (props) => {
    let url = props.url;
    let path = props.path;
    let title = props.title;
    return url !== '' ?
        <div>
            <IonCardSubtitle style={{ marginBottom: -15, paddingTop: 20 }}>{title}</IonCardSubtitle>
            <div className='thumbSlider noScrollbar'>
                <Thumbnails url={url} path={path} />
            </div>
        </div>
        :
        <IonCardSubtitle>No URL Available</IonCardSubtitle>

}

ThumbSlider.propTypes = {
    url: propTypes.string.isRequired,
    title: propTypes.string.isRequired
}
Thumbnails.propTypes = {
    url: propTypes.string.isRequired,
    path: propTypes.string.isRequired
}

export default ThumbSlider;
