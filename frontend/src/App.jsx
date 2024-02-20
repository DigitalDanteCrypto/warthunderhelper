import './App.css'
import Ruban from './Components/Ruban'
import EnnemiesDisplay from './Components/Ennemies/EnnemiesDisplay'
import UserPlane from './Components/User/UserPlane'
import {PlanesProvider} from './Service/PlaneContext';



function App() {


    return (
        <>
            <PlanesProvider>
                <Ruban/>
                <EnnemiesDisplay/>
                <UserPlane/>
               
            </PlanesProvider>
        </>
    )
}

export default App
