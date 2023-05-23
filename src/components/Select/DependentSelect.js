import React, { useEffect, useState } from "react";
import "./Select.css";
import { countries } from "./data";

const DependentSelect = () => {
  const [country, setCountry] = useState({});
  const [district, setDistrict] = useState({});
  const [c, setC] = useState('')
  const [d, setD] = useState('')
  const [s, setS] = useState('')

  const handleCountry = (e) => {
    setC(e.target.value)
  }

  const handleDistrict = (e) => {
    setD(e.target.value)
  }

  const handleSubdistrict = (e) => {
    setS(e.target.value)
  }

  useEffect(() => {
    setCountry(countries?.find((item) => item.name === c))
    setDistrict(country?.district?.find((item) => item.name === d))
  }, [country, c, d])

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
          c && country?.district?.map((item) => <option value={item.name}>{item.name}</option>)
        }
      </select>

      <select name="" id="" className="country-select" onChange={handleSubdistrict}>
        <option value="">select Sub District</option>
        {
          c && d && district?.subdistrict?.map((item) => <option value={item.name}>{item.name}</option>)
        }
      </select>

      <br />

      <ul>
        <li>Country: {c}</li>
        <li>District: {d}</li>
        <li>Sub District: {s}</li>
      </ul>
    </>
  )
}

export default DependentSelect;