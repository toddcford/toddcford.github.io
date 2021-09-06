import React from 'react';

export default function Home() {
  return (
    <div className="home-wrapper">
      
      <img id="home-photo" src={process.env.PUBLIC_URL + "Images/me.jpg"} alt={"toddford"}/>
      
      <h1 className="home-title"> Todd Ford </h1>
      <h4 className="home-subtitle">Software Developer </h4>
    </div>
  );
}