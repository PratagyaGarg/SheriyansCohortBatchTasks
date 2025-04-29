import React from 'react'
import Navbar from './Components/Header/Navbar'
import MainDetails from './Components/Main/MainDetails'
import MainImage from './Components/Main/MainImage'
import Quote from './Components/Main/Quote'
import Skills from './Components/Main/Skills'
import Work from './Components/Main/Work'


const App = () => {
  return (
    <>
    <header className='px-40'>
      <Navbar/>
    </header>
    <main className='px-40 w-full '>
      <MainDetails/>
      <MainImage/>
      <Quote/>
      <Skills/>
      <Work/>

    </main>
    </>
  )
}
export default App;
