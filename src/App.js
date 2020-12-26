import './App.css';
import Project from './components/Project/Project';
import {ProjectItems} from './components/Project/ProjectItems';

function App() {
  return (
    <div className="App">

      {ProjectItems.map((item, index) => {
        return(
          <Project name={item.name} tech={item.tech} desc={item.desc} image={item.image} repo={item.repo} direction={index % 2 ?' right' : 'left'} />
        )
      })}

    </div>
  );
}

export default App;
