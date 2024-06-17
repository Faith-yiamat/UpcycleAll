import './App.css';
import Roadmap from './RoadMap';
import About from './AboutUs';
import Team from './Team';
import Homepage from './HomePage';
import Contacts from './Contacts';


function App() {
  return (
    <div className="App">
      <Homepage/>
      <About/>
      <Roadmap/>
      <Team/>
      <Contacts/>
    </div>
  );
}

export default App;
