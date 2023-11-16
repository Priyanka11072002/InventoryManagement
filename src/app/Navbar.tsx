import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    {/* <div className='d-flex justify-content-start align-items-center gap-3'>
    
     <h1>Inventory</h1>  
     
     
     <div className='navbar text-decoration-none'>
 
  <Link to="">Home</Link>      
 <Link to="">Categories</Link>
 <Link to="">Products</Link>
 <Link to="">Purchases</Link>
 <Link to="">Sales</Link>
 <Link to="">Supliers</Link>
 <Link to="">Transfers</Link>
    </div>
    </div> */}
    <nav className='navbar navbar-dark navbar-expand bg-primary'>
    <div  className='container-fluid'>
  <Link to="/" className='navbar-brand'>Inventory Manager</Link>    
     
     <div className='collapse navbar-collapse'>
       <ul className="nav nav-pills">
        <li className='nav-item'>
            <NavLink to="/"  className="nav-link text-white">Home</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink  to="/categories"  className="nav-link text-white">Categories</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink  to="/products"  className="nav-link text-white">Products</NavLink>
        </li> 
       
        <li className='nav-item'>
            <NavLink to="/purchases"  className="nav-link text-white">Purchases</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink  to="/Sales"  className="nav-link text-white">Sales</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink  to="/supliers"  className="nav-link text-white">Supliers</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink  to="/transfers"  className="nav-link text-white">Transfers</NavLink>
        </li>
        </ul> 
     </div>

    </div>


    </nav>
    </>
  )
}

export default Navbar;