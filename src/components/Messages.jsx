import React from 'react';
import Message from './Message';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Left from './Left';



function Messages(props) {

    return(
        <div>
            <style jsx> { `  
  

            
             `}
            </style>
            <Left/>
            {props.messages.map((message, index) =>
            <Message
            post={message.post}
            array={props.messages}
            key={index}/>
         
            )}
        </div>
    );
}

Messages.propTypes ={
    messages: PropTypes.array
}

export default Messages;