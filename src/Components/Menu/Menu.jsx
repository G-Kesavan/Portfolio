import React from 'react'
import './Menu.css'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Menu = ({showOption,closeOption}) => {
    const showMenu =()=>{
        const showMenu = document.getElementsByClassName('showMenu')[0];
        showMenu.style.display='none'
        const closeMenu = document.getElementsByClassName('closeMenu')[0];
        closeMenu.style.display='flex'
        showOption()
    }
    const closeMenu =()=>{
        const showMenu = document.getElementsByClassName('showMenu')[0];
        showMenu.style.display='flex'
        const closeMenu = document.getElementsByClassName('closeMenu')[0];
        closeMenu.style.display='none'
        closeOption()
    }
  return (
    <div className='menu'>  
        <button className='showMenu' onClick={()=>showMenu()}><BsFillMenuButtonWideFill
        fontSize='35px' fontWeight='700'/></button>
        <button className='closeMenu' onClick={()=>closeMenu()}><IoClose fontSize='35px' fontWeight='700' /></button>
    </div>
  )
}

export default Menu