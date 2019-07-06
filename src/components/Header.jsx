import React from 'react';

function Header(){
  return (
  <div>
    <style jsx>  {`
      #leftBtn {
        margin-left:20%;
      }

      #leftBtn1 {
        background-color: white;
        color:#36383b;
        font-weight: lighter;
        border: 1.5px solid #c4c4c4;
        border-right:0;
        width:60px;
        height: 35px;
        margin-right:0.5px;
        font-size:13px;
      }

      #leftBtn2 {
        background-color: white;
        color: #36383b;
        font-weight: lighter;
        border: 1.5px solid #c4c4c4;
        border-right:0;
        width:100px;
        height: 35px;
        font-size:13px;
      }

      #leftBtn3 {
        background-color: white;
        color: #36383b;
        font-weight: lighter;
        border: 1.5px solid #c4c4c4;
        width:100px;
        height: 35px;
        font-size:13px;
      }

      #rightBtn {
        float: right;
        margin-right:20%;
      }

      #search {
        border-radius: 18px;
        width: 180px;
        height:25px;
        margin-right: 2em;
        font-size:13px;
        border: 1.5px solid #2b97f0;
        padding-left: 10px;
      }

      #tweet {
        border: 1.5px solid #2b97f0;
        border-radius: 18px;
        width: 80px;
        height:25px;
        font-size:13px;
        font-weight: lighter;
        color: #36383b;
      }

      h4 {
        border-bottom: 2px solid #c4c4c4;
        margin-left:19%;
        margin-right:19%;
        margin-top: 13px;
      }

    `}
    </style>

  <div className="Navbar">
    <span id="leftBtn">
      <button id="leftBtn1">Home</button>
      <button id="leftBtn2">Notifications</button>
      <button id="leftBtn3">Messages</button>
    </span>
    <span id="rightBtn">
    <input id="search" type="text" placeholder="Search" name="tweet"></input>
    <button id="tweet" type="submit" name="tweet">Tweet</button>
    </span>
    <h4></h4>
  </div>
</div>
  );
}
export default Header;
