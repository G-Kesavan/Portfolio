import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import MainBox from '../MainBox/MainBox'

const Main = () => {
  return (
    <main className='main'>
        <Sidebar/>
        <MainBox/>
    </main>
  )
}

export default Main