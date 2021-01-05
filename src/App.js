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
      <div className="activities-section">
        {ActivityItems.map((item, index) => {
          return(
            <Activity role={item.role} org={item.org} date={item.date} desc={item.desc} image={item.image} />
          )
        })}
      </div>
    </div>
  );
}

export default App;