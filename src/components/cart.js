import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Fc } from '../App'
import Navbar from './navbar'
import './home.css'
import './cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {dishes,setdishes} = useContext(Fc) 
  const [lc,setlc] = useState(false);
  const [total, setTotal] = useState(0);
  let [ct,setct] = useState(0)
  const calculateTotal = () => {
    let t = 0;
    let count = 0;
    dishes.forEach((dish) => {
      t += parseInt(dish.price) * dish.cart
      if(dish.cart!==0)
      {
        count++;
      }
    })
    setTotal(t)
    setct(count)
  }
  
  useEffect(() => {
    func();
    calculateTotal();
  },[dishes])

  async function func() {
    const idishes = await axios.get(`http://localhost:4000/items`);
    setdishes(idishes.data);
  }

  async function removecart(val) 
  {
    setlc(!lc);
    await axios.put(`http://localhost:4000/items/${val.id}`, {
      id : val.id,
      name : val.name,
      src : val.src,
      price : val.price,
      cart : val.cart - 1
    }).then((res) => {
        func();
        calculateTotal();
        console.log("hello")
    })
  }

  return (
    <>
        <Navbar />
        {
          dishes && <div className="cardsf">
          <div className="row">
            {dishes.map((dish) => {
              if(dish.cart !== 0){
                return (
                      <div className="col col-sm-8 col-md-6 col-lg-4">
                          <div className="card" style={{width: "18rem" }}>
                              <img className="card-img-top i1" src={dish.src} />
                              <div className="card-body" style={{backgroundColor:"#F2E7D5"}}>
                                  <h5 className="card-title">{dish.name}</h5>
                                  <p className="card-text">Price - {dish.price}*{dish.cart} = ${parseInt(dish.price)*parseInt(dish.cart)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity - {dish.cart}</p>
                                  <button type="button" className="btn btn-success bt" id="bt-1" onClick={() => removecart(dish)}>Remove from Cart</button>
                              </div>
                          </div>
                      </div>
                    ) 
              }
                  }
                )
              }
          </div>
      </div>
        }
        
        {/* <div className="cardsf">
            <div className="row">
              {dishes.map((dish) => {
                if(dish.cart !== 0){
                  return (
                        <div className="col col-sm-8 col-md-6 col-lg-4">
                            <div className="card" style={{width: "18rem" }}>
                                <img className="card-img-top i1" src={dish.src} />
                                <div className="card-body" style={{backgroundColor:"#F2E7D5"}}>
                                    <h5 className="card-title">{dish.name}</h5>
                                    <p className="card-text">Price - {dish.price}*{dish.cart} = ${parseInt(dish.price)*parseInt(dish.cart)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity - {dish.cart}</p>
                                    <button type="button" className="btn btn-success bt" id="bt-1" onClick={() => removecart(dish)}>Remove from Cart</button>
                                </div>
                            </div>
                        </div>
                      ) 
                }
                    }
                  )
                }
            </div>
        </div> */}
        {
          total!==0 && <div className="container ct1">
          <h4 className="tf">Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> <b>{ct}</b></span></h4>
          {dishes.map((dish) => {
            if(dish.cart !== 0)
            {
              return (
                <p>{dish.name} <span className="price">${parseInt(dish.price)*parseInt(dish.cart)}</span></p>
              )
            }
          }
          )
          }
          <hr/>
          {
            total!==0 && <p>Total Amount<span className="price" style={{color:"black"}}><b>${total}</b></span></p>
          }
        </div>
        }
        {
          total === 0 && <h1 className="disp">Nothing in Cart.</h1>
        }
        {
          total!==0 && <Link to="/shipping"><button type="button" className="btn btn-success yty">Proceed to Buy Now</button></Link>
        }
        {/* <div className="container ct1">
          <h4 className="tf">Cart <span className="price" style={{color:"black"}}><i className="fa fa-shopping-cart"></i> <b>4</b></span></h4>
          {dishes.map((dish) => {
            if(dish.cart !== 0)
            {
              return (
                <p>{dish.name} <span className="price">${parseInt(dish.price)*parseInt(dish.cart)}</span></p>
              )
            }
          }
          )
          }
          <hr/>
          {
            total && <p>Total Amount<span className="price" style={{color:"black"}}><b>${total}</b></span></p>
          }
        </div> */}
    </>
  )
}

export default Cart