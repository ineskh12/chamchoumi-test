import React from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';

function Search({ handler, value }) {
    return (
        <div className="container">
            <div>
                <MdSearch />
            </div>
            <input className="search-input"
                onChange={handler}
                value={value}
                placeholder='Search by title or date'
            />
        </div>
    );
}

Search.propTypes = {
    handler: PropTypes.func,
    value: PropTypes.string
};

Search.defaultProps = {
    handler: () => {},
    value: ''
};

export default Search;
