import React, { useEffect, useState } from "react";
import "./Select.css";
import { countries } from "./data";

const Test = () => {
  const [selectedCountry, setSelectedCountry] = useState({});
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [subdistrict, setSubdistrict] = useState([]);
  const [selectedSubdistrict, setSelectedSubdistrict] = useState({});

  const handleCountry = (e) => {
    setSelectedCountry(countries.find((item) => item.name === e.target.value))
    setDistrict([])
    setSelectedDistrict({})
    setSubdistrict([])
    setSelectedSubdistrict({})
  }

  const handleDistrict = (e) => {
    setSelectedDistrict(district.find((item) => item.name === e.target.value))
    setSubdistrict([])
    setSelectedSubdistrict({})
  }

  const handleSubdistrict = (e) => {
    setSelectedSubdistrict(subdistrict.find((item) => item.name === e.target.value));
  }

  useEffect(() => {
    setDistrict(selectedCountry?.district)
    setSubdistrict(selectedDistrict?.subdistrict)
  }, [selectedCountry, selectedDistrict])

  return (
    <>
      <select name="" id="" className="country-select" onChange={handleCountry}>
        <option value="">select country</option>
        {
          countries.map((item) => <option value={item.name}>{item.name}</option>)
        }
      </select>

      <select name="" id="" className="country-select" onChange={handleDistrict}>
        <option value="">select District</option>
        {
          selectedCountry && district?.map((item) => <option value={item.name}>{item.name}</option>)
        }
      </select>

      <select name="" id="" className="country-select" onChange={handleSubdistrict}>
        <option value="">select Sub District</option>
        {
          selectedCountry && selectedDistrict && subdistrict?.map((item) => <option value={item.name}>{item.name}</option>)
        }
      </select>

      <br />

      <ul>
        <li>Country: {selectedCountry?.name}</li>
        <li>District: {selectedDistrict?.name}</li>
        <li>Sub District: {selectedSubdistrict?.name}</li>
      </ul>
    </>
  )
}

export default Test