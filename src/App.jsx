import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from '../src/pages/NotFound/NotFound'
import Header from './components/Header/Header';
import Home from '../src/pages/Home/Home';
import Shop from '../src/pages/Shop/Shop';
import Contact from '../src/pages/Contact/Contact';
import Blog from '../src/pages/About/Blog';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Router>
        {/* HEADER */}

        <Header/>
 
        {/* ROUTES */}

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<Blog/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
         
        {/* FOOTER */}

        <Footer/>
      </Router>
    </div>
  )
}

export default App