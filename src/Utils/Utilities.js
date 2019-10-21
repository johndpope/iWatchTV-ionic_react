import propTypes from 'prop-types';

export const randomNum = (min, max) => {
    const random = min + Math.random() * (max - min);
    return random;
};

randomNum.propTypes = {
    mix: propTypes.number.isRequired,
    max: propTypes.number.isRequired
}

