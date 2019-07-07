import React from 'react';
import PropTypes from 'prop-types';


function New(props) {
  return (
    <div>
      <style jsx>{`
          img {
            width:50px;
            height: 50px;
          }
          `}</style>
        <img src={require(`../assets/img/${props.img.toLowerCase()}`)}/>
        <h3> {props.title} </h3>
      <p><em>{props.feed}</em></p>
      <hr/>
    </div>
  );
}

New.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  feed: PropTypes.string,
};

export default New;
