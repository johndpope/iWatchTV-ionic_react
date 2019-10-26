import React from 'react';
import { IonIcon, } from '@ionic/react';
import { star } from 'ionicons/icons';
import propTypes from "prop-types";
import { randomNum } from '../Utils/Utilities';
import Skeleton from 'react-skeleton-loader';

var loaded = false;

const Slider = (props) => (
    <div className="slider-wrapper HomeSliderContainer">
        <div className="swiper-container slider">
            <Slides url={props.url} />
        </div>
    </div>
)

const Slides = (props) => {
    const [state, setState] = React.useState({ movies: [], error: false })
    let url = props.url;
    const skeleton = [{}, {}, {}, {}, {}];
    async function Fetch(url) {
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
    }
    React.useEffect(() => {
        Fetch(url)
    }, [url])
    const [loading, setLoading] = React.useState(true)

    const Movies = () => state.movies.map(({ backdrop_path, title, id, release_date, vote_average, poster_path }) => (
        <div key={id + randomNum} className={`swiper-slide slide slidein`} style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
            <a href={'/movie/' + id}>
                <div className="SlideSubTitle">
                    <p className="SlideSubTitleText">{title}</p>
                </div>
                <img className="SlideImg" src={'https://image.tmdb.org/t/p/original/' + backdrop_path} alt="no" />
                <h6 className='thumbDate'>{release_date}</h6>
                <h6 className='thumbVote'><IonIcon icon={star} />{vote_average}</h6>
            </a>
        </div>
    ))
    const LoadingSkeleton = () => skeleton.map(() => (
        <div key={randomNum(0, 9999)} className="swiper-slide" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
            <div>
                <div className="SlideSubTitle">
                    <p className="SlideSubTitleText"><Skeleton /></p>
                </div>
                <div className="SlideImg"><Skeleton width="100%" widthRandomness="0" /></div>
                <h6 className='thumbDate'><Skeleton /></h6>
                <h6 className='thumbVote'><Skeleton /></h6>
            </div>
        </div>
    ))
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
            loaded = true;
        }, 1550)
    }, [loading])
    return (
        loading === true && loaded === false && state.movies ?
            <LoadingSkeleton />
            : <Movies />
    )

}

Slider.propTypes = {
    url: propTypes.string.isRequired
}

export default Slider;
