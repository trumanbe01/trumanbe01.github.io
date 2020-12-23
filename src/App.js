import Navbar from './components/Navbar/Navbar';
// import AboutSection from './components/AboutSection/AboutSection';
// import Project from './components/Project/Project';
// import { ProjectItems } from './components/Project/ProjectItems';
import './App.css';
import Main from './pictures/Main.jpg';

const Titles = [
  'Computer Science Student'
]

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-section">
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
      {/* <AboutSection />
      {ProjectItems.map((item, index) => {
        return(
          <Project direction={(index % 2) ? 'right' : 'left'} name={item.name} desc={item.desc} image={item.image} />
        )
      })} */}
    </div>
  );
}

export default App;