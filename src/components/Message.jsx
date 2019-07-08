import React from 'react';
import PropTypes from 'prop-types';



function Message(props) {
    return(
        <div>
            <h2>@KellyH</h2>
            <li>{props.post}</li>
        </div>
    );
}

Message.propTypes ={
   post: PropTypes.string
};

export default Message;