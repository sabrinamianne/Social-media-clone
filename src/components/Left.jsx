import React from 'react';
import profile from '../assets/img/icone.png';
import Right from './Right';
import PropTypes from 'prop-types';

function Left() {
  return (
    <div>
      <style jsx> {`
        .profil {
          margin-left: 20%;
          width: 400px;
          height: 148px;
          border: 1.5px solid #c4c4c4;
          border-radius: 1px;
          background-color:  #1d7fc4;
        }

        #img {
          border: 2px solid #fafafa;
          background-color: #1d7fc4;
          width: 120px;
          height: 120px;
          border-radius: 14px;
          margin-top: 60px;
          margin-left:15px;
        }

        #profil2 {
          margin-left: 20%;
          width: 400px;
          height: 100px;
          border: 1.5px solid #c4c4c4;
          border-radius: 1px;
          border-top:0;
          position:absolute;
        }

        img {
          width: 40px;
          margin-top:40px;
          margin-left:38px;
        }

        #name {
          font-size:20px;
          color: #595f63;
          float: right;
          margin-right: 30px;
          margin-top:2px;
          font-weight: bold;
        }

        .lines, p{
          margin-top:10px;
          margin-left:15px;
          display: inline-block;
          color:#97999c;
          font-weight: bold;
          font-size:14px;
        }

        .profil3 {
          width: 357px;
          height: auto;
          border: 1.5px solid #c4c4c4;
          border-radius: 1px;
          margin-top:10px;
          padding-left:20px;
          padding-right:20px;
          padding-top:20px;
          line-height:1.5;

        }

        `}
      </style>
      <Right/>
      <div className="profil">
        <div id="img"><img src={profile}></img></div>
      </div>
      <div id="profil2">
        <p id="name">Kellie A. Corrigan</p>
        <div className="lines">
          <p>TWEETS</p>
          <p>FOLLOWING</p>
          <p>FOLLOWERS</p>
        </div>
        <div className="profil3">
          <p>@KellyH</p><br/>
          <p><strong>Location:</strong> Seattle</p><br/>
          <p><strong>Joined</strong> December 2008</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
  </div>
  )
}

export default Left;
