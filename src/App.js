import './App.css';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import Register from './components/pages/register/Register';
import Settings from './components/pages/settings/Settings';
import Single from './components/pages/single/Single';
import Write from './components/pages/write/Write';
import Topbar from './components/topbar/Topbar';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post/:post_id" element={<Single />} />
          {/* <Route path="/about" element={< />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
