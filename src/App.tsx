import './App.css'
import Navigation from './Navigator'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Analyze from './AnalyzList'
import Home from './Home'

function App() {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/analyzList' element={<Analyze/>}/>
      </Routes>
    </div>
  )
}

export default App
