import React from 'react'
import { Link } from 'react-router-dom';

function Navibar() {
  return (
    <nav className='navbox'>
        <span><Link to="/" className='linkname'>Home</Link></span>
        <span><Link to="/detail" className='linkname'>Detail</Link></span>
    </nav>

  )
}
export default Navibar;
