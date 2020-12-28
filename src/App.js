import './App.css';
import Main from './pictures/Main.jpg';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Activity from './components/Activity/Activity';
import { ProjectItems } from './components/Project/ProjectItems';
import { ActivityItems } from './components/Activity/ActivityItems';

const Titles = [
  'Computer Science Student'
]

function App() {
  return (
    <div className="App">
      {ActivityItems.map((item, index) => {
        return(
          <Activity name={item.name} date={item.date} desc={item.desc} image={item.image} />
        )
      })}
    </div>
  );
}

export default App;