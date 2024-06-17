import './App.css';
import Roadmap from './RoadMap';
import About from './AboutUs';
import Team from './Team';
import Homepage from './HomePage';


function App() {
  return (
    <div className="App">
      <Homepage/>
      <About/>
      <Roadmap/>
      <Team/>
    </div>
  );
}

export default App;
