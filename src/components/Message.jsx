import React from 'react';
import PropTypes from 'prop-types';



class Message extends React.Component {
    constructor(props){
        super(props);
        console.log("console"+this.props.like)
        this.state = {
            like: 0
          };
    }

    handelClick=(event)=>{
        var newLike = this.state.like;
        newLike++;
        console.log(this.state.like, newLike);
        this.setState({like: newLike})

    }


    render(){
    return(
        <div>
            <h2>@KellyH</h2>
            <h3>Likes: </h3>{this.state.like}
            <li>{this.props.post}</li>

            <button onClick={event=> this.handelClick(event)}>Like</button>
        </div>
    );
}


}

Message.propTypes ={
   post: PropTypes.string,
   onClick: PropTypes.func
};



export default Message;