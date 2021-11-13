import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGTP3 } from './containers';
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg scale-up-center">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
