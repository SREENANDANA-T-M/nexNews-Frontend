import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Public/Pages/Home'
import About from './Public/Pages/About'
import ContactUs from './Public/Pages/ContactUs'

import CategoryPage from './Public/Pages/CategoryPage'
import SingleNews from './Public/Pages/SingleNews'
import Login from './Admin/Pages/Login'
import AdminDashboard from './Admin/Pages/AdminDashboard'
import CreateNews from './Admin/Pages/CreateNews'
import EditNews from './Admin/Pages/EditNews'
import Profile from './Admin/Pages/Profile'
import NotFound from './Public/Pages/NotFound'
import SearchResults from './Public/Pages/SearchResults'

function App() {

  return (
    <>
    <Routes>
      {/* public routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/news/:id' element={<SingleNews />} />
        <Route path="/search" element={<SearchResults />}/>

        {/* admin routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/create-news' element={<CreateNews />} />
        <Route path='/edit-news/:id' element={<EditNews />} />
        <Route path='/profile' element={<Profile />} />

        {/* invalid route */}
        <Route path='*' element={<NotFound />} />
    </Routes>
      
    </>
  )
}

export default App
