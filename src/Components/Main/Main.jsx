import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Content from '../Content/Content.jsx'
import Navber from '../Navber/Navber.jsx'

const Main = ({setPageName,Page,scrollTop}) => {
  const showOption =()=>{
        const navbar = document.querySelectorAll('.li-none');
        navbar.forEach(nav =>{
          nav.style.display = 'flex'
        })
        const sidebar = document.getElementsByClassName('sidebar')[0];
        sidebar.style.display='flex'
    }
    const closeOption =()=>{
        const navbar = document.querySelectorAll('.li-none');
        navbar.forEach(nav =>{
          nav.style.display = 'none'
        })
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
          setPageName={setPageName}
        />
        <Navber
          setPageName={setPageName}
          showOption={showOption}
          closeOption={closeOption}
        />
    </main>
  )
}

export default Main