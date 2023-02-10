import React, { useEffect, useRef, useState } from 'react'
import Navbar from './navbar'
import './shipping.css'

const DeliveryForm = () => {

    const [cli,setcli] = useState(true)
    const [ts,setts] = useState(0)
    const fn = useRef()
    const ln = useRef()
    const addr = useRef()
    const pinc = useRef()
    const city = useRef()

    const clickhandler = () => {
        console.log(fn.current.value.length)
        console.log(ln.current.value.length)
        console.log(addr.current.value.length)
        console.log(pinc.current.value.length)
        console.log(city.current.value.length)

        if(fn.current.value.length !== 0 && ln.current.value.length !== 0 && addr.current.value.length !== 0 && pinc.current.value.length !== 0 && city.current.value.length !== 0)
        {
            setts(1)
        }
    }

    useEffect(() => {

        if(ts===1)
        {
            setcli(false)
        }
    },[ts])

  return (
    <>
    <Navbar />
    {
        cli && <div className="blockit">
        <div className="containerr">
      <h1 className="har">Shipping</h1>
      <p className="par">Please enter your shipping details.</p>
      <hr classNameName="hero"/>
      <div className="form ty">
        
      <div className="fields fields--2">
        <label className="field">
          <span className="field__label" for="firstname">First name</span>
          <input className="field__input" type="text" id="firstname" ref={fn} placeholder="Enter First Name"/>
        </label>
        <label className="field">
          <span className="field__label" for="lastname">Last name</span>
          <input className="field__input" type="text" id="lastname" ref={ln} placeholder="Enter Last Name"/>
        </label>
      </div>
      <label className="field">
        <span className="field__label" for="address">Address</span>
        <input className="field__input" type="text" id="address" ref={addr} placeholder="Enter Address"/>
      </label>
      <label className="field">
        <span className="field__label" for="country">Country</span>
        <select className="field__input" id="country">
          <option value=""></option>
          <option value="india">India</option>
          <option value="unitedstates">United States</option>
          <option value="unitedkingdom">United Kingdom</option>
        </select>
      </label>
      <div className="fields fields--3">
        <label className="field">
          <span className="field__label" for="zipcode">Zip code</span>
          <input className="field__input" type="text" id="zipcode" ref={pinc} placeholder="Enter PIN code"/>
        </label>
        <label className="field">
          <span className="field__label" for="city">City</span>
          <input className="field__input" type="text" id="city" ref={city} placeholder="Enter City"/>
        </label>
        <label className="field">
          <span className="field__label" for="state">State</span>
          <select className="field__input" id="state">
            <option value=""></option>
            <option value="andhra">Andhra Pradesh</option>
            <option value="andhra">Telangana</option>
            <option value="washington">Washington DC</option>
            <option value="london">London</option>
          </select>
        </label>
      </div>
      </div>
      <p className="note">Disclaimer :- BSR FOODS offers only Cash on delivery as of now. Please note that Your delivery will be placed only if the entered shipping details are valid.</p>
      <hr className="hero"/>
      <button className="button" onClick={clickhandler}>Order Now</button>
    </div>
        </div>
    }
    { cli===false && <h1 className="ord">Order placed Successfully<br/>Will Be delivered to your address within 30 mins.<br/>Thanks for ordering in BSR Foods. Open 24x7.</h1>}
    </>
  )
}

export default DeliveryForm