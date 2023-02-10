import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand" href="#">BSR Foods</Link>
                <Link to='/' className="navbar-brand" href="#">Home</Link>
                <Link to='/cart' className="navbar-brand" href="#">Cart</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar