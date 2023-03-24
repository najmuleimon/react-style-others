import React, { useEffect, useState } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "./Select.css";

function Select() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [value, setValue] = useState("select option");

  useEffect(() => {
    document.title = 'Real Estate | Select ';
  },[])

  const options = ["option 1", "option 2", "option 3", "option 4", "option 5","option 6","option 7","option 8"];
  return (
    <>
      <h1>This is Custom Select</h1>
      <div className="custom-select">
        <button className="select-btn"
          onBlur={() => setShowDropdown(false)}
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="btn-main">
            {value}
            <span>
              <svg className={showDropdown ? 'rotate':''}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <polyline
                  points="208 96 128 176 48 96"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></polyline>
              </svg>
            </span>
          </div>
          {showDropdown &&
            <div className="btn-dropdown">
              {options.map((option, index) => (
                <p
                  onClick={() => {
                    setValue(option);
                    setShowDropdown(!showDropdown);
                  }}
                  key={index}
                >
                  {option}
                </p>
              ))}
            </div>
          }
        </button>
      </div>

      <h1>This is Counter up</h1>
      <CountUp start={0} end={100} delay={0}>
        {({ countUpRef }) => (
          <div>
            <p ref={countUpRef} />
          </div>
        )}
      </CountUp>

      <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
          <VisibilitySensor onChange={start} delayedCall>
            <span ref={countUpRef} />
          </VisibilitySensor>
        )}
      </CountUp>

    </>
  );
}

export default Select;
