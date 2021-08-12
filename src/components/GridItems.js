import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';

import Constants from '../utils/Constants';

function Grid({ items, openPopup }) {
    return (
        <div className=" grid-container">
            {items.map((item, i) => {
                const idx = i;
                return (
                    <Item
                        key={idx}
                        id={item.id}
                        title={item.title}
                        image={`${Constants.IMAGE_URL}/${item.poster_path}`}
                        overview={item.overview}
                        ratings={item.vote_average}
                        openPopup={openPopup}
                    />
                );
            })}
        </div>
    );
}

Grid.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
    items: []
};

export default Grid;
