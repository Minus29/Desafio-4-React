import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MiApi from './components/MiApi'



function App() {

  return (
    <div>
      <Navbar brand="Rick and Morty App"></Navbar>
      <MiApi></MiApi>
    </div>
  );
}

export default App;
