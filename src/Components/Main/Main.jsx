import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Content from '../Content/Content.jsx'
import Navber from '../Navber/Navber.jsx'
import Menu from '../Menu/Menu.jsx'

const Main = ({setPageName,Page,scrollTop}) => {
  const showOption =()=>{
        const navbar = document.getElementsByClassName('navbar')[0];
        navbar.style.display='flex'
        const sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.style.display='flex'
    }
    const closeOption =()=>{
        const navbar = document.getElementsByClassName('navbar')[0];
        navbar.style.display='none'
        const sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.style.display='none'
    }
  return (
    <main>
        <Sidebar 
          setPageName={setPageName}       
        />
        <Content
          Page={Page}
          scrollTop={scrollTop}
        />
        <Navber
          setPageName={setPageName}
        />
        <Menu
          showOption={showOption}
          closeOption={closeOption}
        />
    </main>
  )
}

export default Main