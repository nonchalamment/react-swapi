// npm modules
import { Route, Routes } from 'react-router-dom'

//components
import NavBar from '../components/NavBar'
import StarshipList from '../pages/StarshipList/StarshipList'
import StarshipPage from '../components/StarshipPage'

import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
