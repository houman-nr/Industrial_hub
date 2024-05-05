import { useState,useEffect } from 'react'
import Header from './Header'
import FAQ from './FrequentlyAskedQuestions'
import LastNews from './LastNews'
import News from './News'
import Advertising from './Advertising'
import SiteIntroduction from './SiteIntroduction'
import Services from './Services'
import Footer from './Footer/Footer'
function App() {
  useEffect(() => {
    document.title="SAM"
  },[])

  return (
    <>
      <Header></Header>
      <div className='contentContainer'>
        <SiteIntroduction></SiteIntroduction>
        <Services></Services>
        <Advertising></Advertising>
      </div>
      {/* <FAQ></FAQ> */}
      <Footer></Footer>
    </>
  )
}

export default App
