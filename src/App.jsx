import Header from './components/Header'
import './App.css'
import Card from './components/Card'
import Innerpage from './components/innerpage'
import Error from './components/Error'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Photo from './components/Photo'

  function App() {

    return (
      <>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<Card />} />
                <Route path='/home' element={<Card/>}/>
                <Route path='/innerpage/:id' element={<Innerpage />} />
            <Route path='*' element={<Error />} />
            <Route path='/image/:id' element={<Photo/>}/>
           </Routes>
        </BrowserRouter>
      </>
    )
  }

  export default App
