// / import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
// import HelloCamp from './Views/HelloComponent';
import Count from './views/count';
import Home from './Container/Home';
import Stopwatch from './component/stowatch';
import {Profile} from './pages/filepgs'


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
        <Route exact path='/' element = {<Home />}/>
        <Route path='/profile' element = {<Profile/>}/>
        </Routes>
      </Router>
      <Stopwatch/>
      <Count/>
      {/* <HelloCamp/> */}

    </div>
  );
}

export default App;