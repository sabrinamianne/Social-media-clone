import React from 'react';
import icone from '../assets/img/twitter.png';
import person2 from '../assets/img/person2.jpg';
import News from './News';

function Right() {
  return (
    <div>
      <style jsx> {`
        .firstPart img {
          margin-top:0;
          position: absolute;
          height:60px;
          width:60px;
        }

        .news {
          margin-top:0;
          position:absolute;
          margin-left: 55%;
        }

        .box {
          width: 400px;
          height: auto;
          border: 1.5px solid #c4c4c4;
          border-radius: 1px;
          padding: 20px;
        }

        .firstPart {
          width: 441px;
          height: 60px;
          background-color: #1d7fc4;
          border: 1.5px solid #c4c4c4;
          border-radius: 1px;
          border-bottom:0;
        }

        #smallBox {
          width: 250px;
          height: 25px;
          border: 3px solid #9bd5fa;
          background-color: white;
          margin-left:30%;
          margin-top:1em;
          padding-top:5px;
          padding-left:5px;
          color:#42b6f5;
          font-weight:bold;
        }

          `}
      </style>
      <div className="news">
        <div className="firstPart">
          <img src={icone}></img>
          <div id="smallBox">What's happening?</div>
        </div>
        <div className="box">
          <News/>
        </div>
      </div>
    </div>

  )
}

export default Right;
