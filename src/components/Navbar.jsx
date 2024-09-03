import React, {  useState } from 'react'
import logo from '../assets/finalProject assets/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../Context/AuthContext'



export default function Navbar() {

  let navigate = useNavigate()
  let [setLogin, isLogin] = useState(auth)
  let [open,setOpen] = useState(false)
  function toggle() {
    setOpen(!open)
  }

  function logout()
  {
    localStorage.removeItem('userToken')
    setLogin(null)
    navigate('/login')

  }


 


  return (
    <nav className='py-4 bg-main-light'>
      <div className="container md:flex justify-between items-center relative">
        <div className='md:flex gap-2'>
          <img src={logo} width={130} alt="" />
          {isLogin? <ul className={`md:flex gap-4 ${open ? 'block' : 'hidden'}`}>
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/product'}>Product</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'}>cart</NavLink>
            </li>
            <li>
              <NavLink to={'/categories'}>categories</NavLink>
            </li>
            <li>
              <NavLink to={'/brand'}>Brand</NavLink>
            </li>
            
          </ul> :''}
          

        </div>

        <div>
          <ul className={`md:flex gap-2 ${open ? 'block' : 'hidden'}`}>

            
              
              
              
                {isLogin?
                <li className='cursor-pointer'onClick={logout}> {isLogin?<b className='bg-green-600'> {isLogin}</b>:''}  </li>:
                <>
                  <li><NavLink to={'/login'}>Login</NavLink></li>
                <li><NavLink to={'/register'}>Register</NavLink></li>
                <li className='flex gap-4'>
                  <a href=""><i className='fab fa-facebook-f'></i></a>
                  <a href=""><i className='fab fa-twitter'></i></a>
                  <a href=""><i className='fab fa-google'></i></a>
                  <a href=""><i className='fab fa-instagram'></i></a>
                </li>
                
                </>
                 }
                
                
                
              
            
          </ul>
        </div>
        <i onClick={toggle} className={`md:hidden block  ${!open ? 'fa-bars' : 'fa-close'}  fas  fa-2x absolute top-0 right-1 gap-6 cursor-pointer`}></i>
      </div>
    </nav>
  )
}
