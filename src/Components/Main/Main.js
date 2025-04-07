import React from 'react'
import './Main.css'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'

const Main = () => {
  return (
    <main>
        <Sidebar/>
        <Content/>
    </main>
  )
}

export default Main