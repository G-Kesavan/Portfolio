import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import MainBox from '../MainBox/MainBox'

const Main = ({SetValue,value}) => {
  return (
    <main className='main'>
        <Sidebar 
          SetValue={SetValue}       
        />
        <MainBox
          SetValue={SetValue}
          value={value}
        />
    </main>
  )
}

export default Main