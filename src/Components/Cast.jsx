import { IonCardSubtitle } from '@ionic/react';
import React from 'react';
import propTypes from "prop-types";
import { randomNum } from '../Utils/Utilities';

const CastMembers = (props) => {
    const [state, setState] = React.useState({ cast: [{}], error: false })
    let ID = props.id;
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${ID}/credits?api_key=046fdb0d753c6903e673934705cb553f`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setState({ cast: data.cast });
            })
            .catch(error => {
                setState({ error: true });
            });
    }, [ID])
    return state.cast.map(({ name, id, character, profile_path }) => (
        <div key={id + randomNum(100, 99999)} className=''>
            <div className='thumbCard'>
                <a href={`/movie/` + id}>
                    <h5 className='thumbTitle noScrollbar'>{name}</h5>
                    <img className='thumbImg' src={"https://image.tmdb.org/t/p/w500/" + profile_path} alt={id} />
                    <h6 className='thumbDate'>{character}</h6>
                </a>
            </div>
        </div>
    ))
}

const Cast = (props) => {
    let id = props.id
    let title = 'Cast';
    return id !== '' ?
        <div>
            <IonCardSubtitle style={{ marginBottom: -15, paddingTop: 20 }}>{title}</IonCardSubtitle>
            <div className='thumbSlider noScrollbar'>
                <CastMembers id={id} />
            </div>
        </div>
        :
        <p>No Data Available</p>

}

Cast.propTypes = {
    id: propTypes.oneOfType([
        propTypes.number.isRequired,
        propTypes.string.isRequired,
      ]),
}
CastMembers.propTypes = {
    id: propTypes.oneOfType([
        propTypes.number.isRequired,
        propTypes.string.isRequired,
      ]),
}

export default Cast;
