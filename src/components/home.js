import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Fc } from '../App'
import './home.css'

const Home = () => {

  const {dishes,setdishes} = useContext(Fc) 
  const [cl,setcl] = useState(false);
  const [tp,settp] = useState(0);
  
  useEffect(() => {
    func();
    settp(total())
  },[cl])

  function total() {
    return dishes.reduce((acc,curr) => {
        return acc+curr.price*curr.cart
    },0)
  }

  async function func() {
    const idishes = await axios.get(`http://localhost:4000/items`);
    setdishes(idishes.data);
  }

  async function carthandler(val)
  {
    setcl(!cl);
    await axios.put(`http://localhost:4000/items/${val.id}`, {
        id : val.id,
        name : val.name,
        src : val.src,
        price : val.price,
        cart : val.cart + 1
    }).then((res) => {
        console.log("hello")
    })
  }

  return (
    <>
        <div className="cardsf">
            <div className="row">
                {dishes.map((dish) => {
                    return (
                        <div className="col col-sm-8 col-md-6 col-lg-4">
                            <div className="card" style={{width: "18rem" }}>
                                <img className="card-img-top i1" src={dish.src} />
                                <div className="card-body" style={{backgroundColor:"#F2E7D5"}}>
                                    <h5 className="card-title">{dish.name}</h5>
                                    <p className="card-text">Price - ${parseFloat(dish.price).toFixed(2)}</p>
                                    <button type="button" className="btn btn-success bt" id="bt-1" onClick={() => carthandler(dish)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default Home