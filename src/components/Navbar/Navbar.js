import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsChevronDown} from 'react-icons/bs';
import {IoMdClose} from 'react-icons/io';

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header>
    <section className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-7 col-md-4 col-lg-3 col-xl-2">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} alt=""/>
                </a>
              </div>
              <div className="col-5 col-md-8 col-lg-9 col-xl-10">
                <div className="d-flex align-items-center justify-content-end">
                  <button type="button" className="nav-toggler" id="nav-toggler" onClick={() => setShowNav(true)}>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.636113 3.2854H16.0579C16.3544 3.2854 16.651 3.0259 16.651 2.69226V1.2094C16.651 0.912826 16.3544 0.616254 16.0579 0.616254H0.636113C0.302469 0.616254 0.0429688 0.912826 0.0429688 1.2094V2.69226C0.0429688 3.0259 0.302469 3.2854 0.636113 3.2854ZM0.636113 9.21684H16.0579C16.3544 9.21684 16.651 8.95734 16.651 8.6237V7.14084C16.651 6.84427 16.3544 6.5477 16.0579 6.5477H0.636113C0.302469 6.5477 0.0429688 6.84427 0.0429688 7.14084V8.6237C0.0429688 8.95734 0.302469 9.21684 0.636113 9.21684ZM0.636113 15.1483H16.0579C16.3544 15.1483 16.651 14.8888 16.651 14.5551V13.0723C16.651 12.7757 16.3544 12.4791 16.0579 12.4791H0.636113C0.302469 12.4791 0.0429688 12.7757 0.0429688 13.0723V14.5551C0.0429688 14.8888 0.302469 15.1483 0.636113 15.1483Z" fill="#1C213C"/>
                      </svg>                    
                  </button>
                </div>

                <div className={showNav ? 'main-nav show-nav' : 'main-nav'}>
                  <div className="mobile-header">
                    <a className="navbar-brand" href="index.html">
                      <img src="assets/images/logo.png" alt=""/>
                    </a>

                    <button type="button" id="close-nav" onClick={() => setShowNav(false)}>
                      <IoMdClose/>
                    </button>
                  </div>
                  <ul className="nav-bar">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/" end onClick={() => setShowNav(false)}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link submenu" to="/theme" role="button" onClick={() => setShowNav(false)}>
                        Theme <BsChevronDown/>
                      </NavLink>
                      <ul className="dropdown-submenu custom-scrollbar">
                        <li><Link className="dropdown-item" to="/theme">Appartment</Link></li>
                        <li><Link className="dropdown-item" to="/theme">Villa</Link></li>
                        <li><Link className="dropdown-item" to="/theme">House</Link></li>
                        <li><Link className="dropdown-item" to="/theme">Duplexes</Link></li>
                        <li><Link className="dropdown-item" to="/theme">Family House</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/select" onClick={() => setShowNav(false)}>Select</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/range" onClick={() => setShowNav(false)}>Range</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/paginate" onClick={() => setShowNav(false)}>paginate</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/table" onClick={() => setShowNav(false)}>table</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/todo" onClick={() => setShowNav(false)}>todo</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
  )
}

export default Navbar