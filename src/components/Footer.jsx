import React from 'react';

function Footer(){
  return (
    <div>
      <style jsx> {`
        .footer {
          position: fixed;
          bottom:0;
          margin-top:5em;
          left:0;
          width: 100%;
          background-color: #1d7fc4;
        }
        `}</style>
      <div className="footer">
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Footer;
