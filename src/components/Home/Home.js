import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import HomeStyle from './Home.module.css';
import {Tabs, Tab} from 'react-bootstrap';

function Home() {
  const items = ['shirts', 'pants', 'panjabies', 'coats', 'ties'];
  const radioItems = ['lunch', 'dinner', 'breakfast', 'snacks']
  const [dynamicItem, setDynamicItem] = useState([]);
  const [radioValue, setRadioValue] = useState('')
  

  useEffect(() => {
    document.title = 'Real Estate | Home ';
  },[])

  const handleCheck = (event) => {
    var updatedList = [...dynamicItem];
    if (event.target.checked) {
      updatedList = [...dynamicItem, event.target.value];
    } else {
      updatedList.splice(dynamicItem.indexOf(event.target.value), 1);
    }
    setDynamicItem(updatedList);
  };

  const handleRadio = (e) => {
    setRadioValue(e.target.value);
  }

  console.log(dynamicItem);
  

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
      <br />

      <h1>Get checkbox and radio</h1>
      <br />
      {/* <h3>Static checkbox data</h3>
      <ul>
        <li>
          <label htmlFor="shirt">
            <input type="checkbox" id='shirt' value='shirt' />
            Shirt
          </label>
        </li>
        <li>
          <label htmlFor="pant">
            <input type="checkbox" id='pant' value='pant' />
            pant
          </label>
        </li>
        <li>
          <label htmlFor="panjabi">
            <input type="checkbox" id='panjabi' value='panjabi' />
            panjabi
          </label>
        </li>
        <li>
          <label htmlFor="blazer">
            <input type="checkbox" id='blazer' value='blazer' />
            blazer
          </label>
        </li>
      </ul> */}
      <br />
      <h3>Dynamic checkbox data</h3>
      <ul>
        {
          items.map((item, i) => (
            <li key={i}>
              <label htmlFor={item}>
                <input type="checkbox" id={item} value={item} onChange={(e) => handleCheck(e)} />
                {item}
              </label>
            </li>
          ))
        }
      </ul>
      <br />
      <h3>Radio button data</h3>
      <ul>
        {
          radioItems.map((item, i) => (
            <li key={i}>
              <label htmlFor={item}>
                <input type="radio" name="radio" id={item} value={item} onChange={(e) => handleRadio(e)} />
                {item}
              </label>
            </li>
          ))
        }
      </ul>
      <h4>{radioValue ? `Selected radio item is ${radioValue}` : 'no radio item is selected'}</h4>
      

    </div>
  )
}

export default Home