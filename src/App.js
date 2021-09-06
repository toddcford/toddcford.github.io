import React, {useState, useEffect} from 'react'
import { BrowserRouter,Route, Link, Switch } from 'react-router-dom';
import './App.css';

import About from './pages/About/About'
import Home from './pages/Home/Home'


function NavigationBar(props) {
  const bar_item = props.items.map((item, key) => {
    return (
      <div className="nav-item1" key={key}> <Link to={item.toLowerCase()}> {item}</Link></div>
    )
    })
  bar_item.push(<div className='nav-item2'><a href="https://github.com/toddcford">Code</a><a id='git' href="https://twitter.com" className="fa fa-github"> </a> </div>) 
  
  return bar_item;
}

function Header(props) {
  return (
    <div className="main-header-container">
      <h1> {props.name} </h1>
      <img id="photo" src={process.env.PUBLIC_URL + "Images/me.jpg"} alt={"toddford"}/>
      <p id='title'> {props.description} </p>
      <div className="icon-bar">
        <a href="https://twitter.com" className="fa fa-twitter"> </a>
        <a href="https://linkedin.com" className="fa fa-linkedin"> </a>
        <a href="https://github.com/toddcford" className="fa fa-github"> </a> 
      </div>

    </div>
  );
}

function ContentItem(props) {
  return (
    <div className="content-item">
      <a href={props.site}> <img height='150px' width='150px' src={process.env.PUBLIC_URL + props.img_ext} alt={props.name}/> </a>
      <p id='content-p'> {props.name} </p>
    </div>
  )
}

function Footer(props) {
  return (
    <div className="icon-bar">
      <a href="https://twitter.com" className="fa fa-twitter"> </a>
      <a href="https://linkedin.com" className="fa fa-linkedin"> </a>
      <a href="https://github.com/toddcford" className="fa fa-github"> </a> 
  </div>    
  )
}

function App() {
  // const nav_items = ['Home', 'About', 'Portfolio', 'Contact'];
  const nav_items = ['Home', 'Portfolio'];

    return (
      <div className='ReactParent'>
        <BrowserRouter>
        <div className="nav-container" >
          <NavigationBar items={nav_items}/>
        </div>
        {/* <hr className="break1" /> */}
        
        
        <Switch>
            <Route path="/portfolio">
              <div className='content-container'>
                <ContentItem name="Stock Searcher" site="https://stock-searcher.netlify.app/" img_ext="/Images/Stocks.jpg"/>
                <ContentItem name="Random Person Generator" site="https://randompersongenerator.netlify.app" img_ext='/Images/RPG.jpeg'/>
                <ContentItem name="Filterable Table" img_ext='/Images/FTP.jpg' site="https://filterabletable.netlify.app/" />                 
                
                {/* <ContentItem name="Stock Charter" img_ext='/Images/RPG.jpeg' />
                <ContentItem name="Movies" img_ext="/Images/Fractal.jpg" /> 
                <ContentItem name="Movies" img_ext='/Images/RPG.jpeg' /> 
                <ContentItem name="Movies" img_ext="/Images/Fractal.jpg" /> 
                <ContentItem name="Movies" img_ext='/Images/RPG.jpeg' /> 
                <ContentItem name="Movies" img_ext='/Images/RPG.jpeg' />  */}
              </div>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              {/* <Header name="Todd Ford" description="Software Developer" /> */}
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
}
export default App;
