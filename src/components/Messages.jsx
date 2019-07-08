import React from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




function Messages(props) {

    return(
        <div>
         <Link to='/newmessage'><button>New Message</button></Link>
         {props.messages.map((message, index) =>
         <Message
         post={message.post}
         key={index}/>
            )}
        </div>
    );
}

Messages.propTypes ={
    messages: PropTypes.array
}

export default Messages;