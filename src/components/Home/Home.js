import React from 'react';
import { useEffect } from 'react';
import Button from '../Button/Button';
import HomeStyle from './Home.module.css';
import {Tabs, Tab} from 'react-bootstrap';

function Home() {
  useEffect(() => {
    document.title = 'Real Estate | Home ';
  },[])
  return (
    <div className={HomeStyle.container}>
      <h1 className={`${HomeStyle.h1} ${HomeStyle.border}`}>This is our home page</h1>
      <p className={HomeStyle.p}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos tenetur perferendis saepe fugit facilis assumenda alias a. Vel, voluptates nobis?</p>

      <Button/>


      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
          <p>tab 1</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <p>tab 2</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <p>tab 3</p>
        </Tab>
      </Tabs>

    </div>
  )
}

export default Home