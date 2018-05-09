import React from 'react'
import Header from './Header'
import Main from './Main'
import './css/reset.css'
import './css/app.css'
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => (
<ParallaxProvider>
  <div>
    <Header />
    <Main />
  </div>
 </ParallaxProvider>
)

export default App
