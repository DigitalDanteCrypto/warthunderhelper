import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ruban from './Components/Ruban'
import EnnemiesDisplay from './Components/Ennemies/EnnemiesDisplay'
import UserPlane from './Components/User/UserPlane'
import { PlanesProvider } from './Features/PlaneContext';
import UserTips from './Components/User/UserTips'

function App() {
  

  return (
    <>
      <PlanesProvider>
     <Ruban />
     <EnnemiesDisplay />
     <UserPlane />
     <UserTips />

      </PlanesProvider >
    </>
  )
}

export default App
