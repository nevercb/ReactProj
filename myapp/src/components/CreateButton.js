import React from 'react';
import PropTypes from 'prop-types'


const CreateButton = ({onClick}) => {
    return (
        <button className="btn btn-primary" onClick={onClick}>Add New Item</button>
    );
}
export default CreateButton;
