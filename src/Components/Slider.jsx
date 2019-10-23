import React from 'react';
import { IonIcon, IonCardSubtitle } from '@ionic/react';
import { star } from 'ionicons/icons';
import propTypes from "prop-types";
import { randomNum } from '../Utils/Utilities';
import Skeleton from 'react-skeleton-loader';

const Slider = (props) => (
    <div className="HomeSliderContainer">
        <div className="swiper-container">
            <Slides url={props.url} />
        </div>
    </div>
)

const Slides = (props) => {
    const [state, setState] = React.useState({ movies: [], error: false })
    let url = props.url;
    const number = [{}, {}, {}, {}, {}];
    React.useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setState({ movies: data.results });
            })
            .catch(error => {
                setState({ error: true });
            });
    }, [url])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1550)
    }, [loading])
    return (
        loading === true ? 
        number.map(() => (
            <div key={randomNum(0, 9999)} className="swiper-slide slide">
                        <div className={''} style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                            <div>
                                <div className="SlideSubTitle">
                                    <p className="SlideSubTitleText"><Skeleton/></p>
                                </div>
                                <div className="SlideImg"><Skeleton width="100%" widthRandomness="0" /></div>
                                <h6 className='thumbDate'><Skeleton/></h6>
                                <h6 className='thumbVote'><Skeleton/></h6>
                            </div>
                        </div>
                    </div>
        ))
        :
        state.movies.length !== 0 ?
            state.movies.map(({ backdrop_path, title, id, release_date, vote_average, poster_path }) =>
                backdrop_path === null || backdrop_path === undefined ? null :
                    <div key={id + randomNum} className="swiper-slide slide">
                        <div className={''} style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                            <a href={'/movie/' + id}>
                                <div className="SlideSubTitle">
                                    <p className="SlideSubTitleText">{title}</p>
                                </div>
                                <img className="SlideImg" src={'https://image.tmdb.org/t/p/original/' + backdrop_path} alt="no" />
                                <h6 className='thumbDate'>{release_date}</h6>
                                <h6 className='thumbVote'><IonIcon icon={star} />{vote_average}</h6>
                            </a>
                        </div>
                    </div>
            ) :
            <IonCardSubtitle>No Movies</IonCardSubtitle>
    )

}

Slider.propTypes = {
    url: propTypes.string.isRequired
}

export default Slider;
