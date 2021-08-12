import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Popup from "./Popup";

function Item({ id, image, title, overview, ratings, openPopup }) {
    return (
        <div className="item-container" onClick={() => openPopup(id)}>
            <div className="image-item">
                <img src={image} />
            </div>
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    ratings: PropTypes.number
};

Item.defaultProps = {
    image: '',
    title: '',
    overview: '',
    ratings: ''
};

export default Item;
