import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group';
import { randomNum } from '../Utils/Utilities';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

const ImageCarousel = (props) => {

    return (
        <div>
            <CSSTransitionGroup
                transitionName="carousel"
                transitionAppear={true}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                <div key={props.id + randomNum} className={`swiper-slide slide slidein`} style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                    <a href={'/movie/' + props.id}>
                        <div className="SlideSubTitle">
                            <p className="SlideSubTitleText">{props.title}</p>
                        </div>
                        <img className="SlideImg" src={'https://image.tmdb.org/t/p/original/' + props.backdrop_path} alt="no" />
                        <h6 className='thumbDate'>{props.release_date}</h6>
                        <h6 className='thumbVote'><IonIcon icon={star} />{props.vote_average}</h6>
                    </a>
                </div>
            </CSSTransitionGroup>
        </div>
    );
}

export default ImageCarousel;