import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assest/gol-logo 1.jpg'

const Navbar = () => {
  return (
        <div className="navbar w-10/12 mx-auto mb-32 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <Link to='/home'>Home</Link>
      <Link to='/findreservations'>Find Reservations</Link>
        <Link to='/Packages' className='px-3'>Packages</Link>
        <Link to='/aboutlakshadweep' className='px-3'>About Lakshadweep</Link>
        <Link to='/aboutus' className='px-3'>About Us</Link>
        <Link to='/gol' className='px-3'>Gol</Link>
        <Link to='/support' className='px-3'>Support</Link>
      </ul>
    </div>

    
    <Link to='/home'>
    <img src={logoImg} alt="" />
    </Link>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to='/home'>Home</Link>
    <Link to='/findreservations' className='px-3'>Find Reservations</Link>
        <Link to='/Packages' className='px-3'>Packages</Link>
        <Link to='aboutlakshadweep' className='px-3'>About Lakshadweep</Link>
        <Link to='aboutus' className='px-3'>About Us</Link>
        <Link to='gol' className='px-3'>Gol</Link>
        <Link to='support' className='px-3'>Support</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a href="" className=' mr-5 text-cyan-600 font-semibold'>Login</a>
    <a className="rounded-full bg-cyan-600 px-6 py-3 text-white font-semibold cursor-pointer">Sign UP</a>
  </div>
</div>
  )
}

export default Navbar