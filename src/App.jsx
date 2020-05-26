import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Bg-img"></div>
          <div className="App-nav-menu">
            <div className="App-nav-logo-hamb">
              <img src="/images/ironhack-logo.svg" alt="ironhack-logo" class="App-nav-logo" />
              <img src="/images/menu-top.svg" alt="menu" class="App-nav-hamb" />
            </div>
          </div>
          <div className="App-content">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn front-end framework from scratch, to become a ninja developer!</p>
            <a className="App-btn" href="#" target="_blank">
              Awsome!
            </a>
          </div>
        </header>
        <section className="App-info">
          <div className="content-container">
            <div className="info-container">
              <img src="/images/icon1.png" alt="Declarrative" class="info-container-img" />
              <h4>Declarrative</h4>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="info-container">
              <img src="/images/icon2.png" alt="Components" class="info-container-img" />
              <h4>Components</h4>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="info-container">
              <img src="/images/icon3.png" alt="Single-Way" class="info-container-img" />
              <h4>Single-Way</h4>
              <p>A set of immutable values are passed to the component's.</p>
            </div>
            <div className="info-container">
              <img src="/images/icon4.png" alt="JSX" class="info-container-img" />
              <h4>JSX</h4>
              <p>Statically-types, designed to run on modern browsers.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
