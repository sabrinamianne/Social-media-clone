import React from 'react';
import person5 from '../assets/img/person5.jpeg';
import person6 from '../assets/img/person6.jpeg';
import person7 from '../assets/img/person7.jpeg';
import person8 from '../assets/img/person8.jpg';

function Add() {
  return (
    <div>
    <style jsx> {`
        .friends {
          border: 1.5px solid #c4c4c4;
          background-color: white;
          width:400px;
          height:auto;
          margin-top:32em;
          margin-left:20%;
          padding-bottom:1em;
        }

        .friends img{
          width: 70px;
          height: 50px;
        }

        h3 {
        text-align: center;
        margin-top:10%;
        margin-right:30%;
        float: right;
        font-size:16px;
       }

       #btn {
         margin-left:85px;
         margin-top:70px;
         position: absolute;
         width:90px;
         height:25px;
         background-color:#1d7fc4;
         font-size:14px;
         color:white;
         font-weight:bold;
       }
        `}

    </style>
    <div className="friends">
      <img src={person5} alt="person"></img>
      <h3>Leo Dica</h3>
      <button id="btn">Add</button>
      <hr/>
      <img src={person7} alt="person"></img>
      <h3>Stella Size</h3>
      <button id="btn">Add</button>
      <hr/>
      <img src={person8} alt="person"></img>
      <h3>Jessica Lao</h3>
      <button id="btn">Add</button>
    </div>
  </div>
  );
}

export default Add;
