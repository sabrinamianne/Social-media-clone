import React from 'react';
import profile from '../assets/img/icone.png'


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

        `}
      </style>
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
      </div>
    </div>
  )
}

export default Left;
