import Home from './components/Home';
import Details from './components/Details';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/details' element={ <Details />} />
    </Routes>
     
    </>
  );
}

export default App;
