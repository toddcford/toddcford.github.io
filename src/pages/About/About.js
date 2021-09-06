import React from 'react';

export default function About() {
  return (
    <div className="about-wrapper">
      <h1> About </h1>
      <img id="about-photo" src={process.env.PUBLIC_URL + "Images/me.jpg"} alt={"toddford"}/>
      <h2>Hi, I'm Todd. </h2>
  </div>
  )
}