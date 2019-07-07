import React from 'react';
import PropTypes from 'prop-types';


function New(props) {
  return (
    <div>
      <style jsx>{`
          #actus {
            width:100px;
            height: 100px;
          }

           h3 {
           text-align: center;
           margin-top:15%;
           margin-right:6em;
           float: right;
           font-size:15px;
          }

          `}</style>
          <img id="actus" src={require(`../assets/img/${props.img.toLowerCase()}`)}/>
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
