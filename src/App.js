import './App.css';
import Main from './pictures/Main.jpg';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import {ProjectItems} from './components/Project/ProjectItems';

const Titles = [
  'Computer Science Student'
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-section" id="main">
        <img className="main-section-img" src={Main} alt="" />
        <div className="main-section-text">
          <h1 className="main-section-text-name">Truman Be</h1>
          <div className="main-section-text-descriptions">
            {Titles.map((item, index) => {
              return(
                <h1 className="main-section-text-desc">{item}</h1>
              )
            })}
          </div>
        </div>
      </div>
      <div className="projects-section" id="projects">
        {ProjectItems.map((item, index) => {
          return(
            <Project name={item.name} tech={item.tech} desc={item.desc} image={item.image} repo={item.repo} direction={index % 2 ?' right' : 'left'} />
          )
        })}
      </div>
    </div>
  );
}

export default App;