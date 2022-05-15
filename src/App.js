import './App.css';
import Home from './components/pages/home/Home';
import Single from './components/pages/single/Single';
import Write from './components/pages/write/Write';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Home/> */}
      {/* <Single/> */}
      <Write/>
    </div>
  );
}

export default App;
