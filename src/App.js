import "font-awesome/css/font-awesome.min.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/homepage'
import Products from './components/products'
import Faculty from './components/faculty'
import ContactUs from './components/contact-us'
import Login from './components/login'
import NotFound from './components/not-found'
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Products' element={<Products />}/>
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}
export default App;