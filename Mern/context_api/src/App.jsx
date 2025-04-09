import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { AppProvider } from './context/AppContext'

function App() {

  return (
    <AppProvider>
      <Navbar/>
      <Home/>
    </AppProvider>
  )
}

export default App
