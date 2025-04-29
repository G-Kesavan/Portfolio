import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
import Navber from '../Navber/Navber'

const Main = ({SetValue,value}) => {
  return (
    <main>
        <Sidebar 
          SetValue={SetValue}       
        />
        <Content
          SetValue={SetValue}
          value={value}
        />
        <Navber
        SetValue={SetValue}/>
    </main>
  )
}

export default Main