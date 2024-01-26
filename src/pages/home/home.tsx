import React from 'react';
import './home.scss';
import imageLogo from "../../images/logo-homePage.jpg"
export default function Home() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Home</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          <img src={imageLogo} alt="" style={{width:"100%"}}/>
        </div>
      </div>
    </React.Fragment>
)}
