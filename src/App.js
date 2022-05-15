import './App.css';
import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Home/>
    </div>
  );
}

export default App;
