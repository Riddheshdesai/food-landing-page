import React from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-wrapper">
    <div className="container">
      <a className="navbar-brand" href="#Home">
        <img src={logo} alt="logo" className="img-fluid"/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-stream navbar-toggler-icon"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#About">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Explore">Explore foods</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#Reviews">Reviews</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#FAQ">FAQ</a>
          </li>
          <li>
            <button className="main-btn mx-2 call-btn">1200 352 224</button>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  )
}

