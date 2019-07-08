import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';



function MessageForm(props) {
let _post = null;



function handleNewMessage(event){
    event.preventDefault();
    props.onNewCreation({post: _post.value});
   
    _post.value = '';
    props.history.push('/messages');
   
}

    return(
        <div>
         <form onSubmit={handleNewMessage}>
         <label htmlFor="message">New message</label>
         
         <textarea
         type="text"
         id='post'
         name="post"
         ref={(textarea) => {_post = textarea;}}/> <br/>
         <button type= 'submit'>Add</button>
         </form>
        </div>
    );
}

MessageForm.propTypes ={
    onNewCreation: PropTypes.func
};

export default withRouter  (MessageForm);