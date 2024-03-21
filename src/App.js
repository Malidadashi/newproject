import React from 'react'
import "./App.css"
import { Blog, Feature, Footer, Header, Possibility, WhatGPt3 } from "./container/All"
import { Article, Brand, CTA, Navbar } from "./component/All"
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Brand />
        <WhatGPt3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>

    </div>
  )
}

export default App