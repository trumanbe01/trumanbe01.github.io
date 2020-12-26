import './App.css';
import Main from './pictures/Main.jpg';
import Navbar from './components/Navbar/Navbar';

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
    </div>
  );
}

export default App;