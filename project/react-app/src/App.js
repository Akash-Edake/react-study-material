// import logo from './logo.svg';
import Fetch from './akash/fetch';
import "./App.css";
import About from "./component/PageNav/About";
import Home from "./component/PageNav/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/PageNav/Navbar";
import UseContext from './component/useContext/UseContext';
import Reducer from './component/UseReducer/Reducer';
import SimpleGet from './component/FechApi/Get/SimpleGet';
import Simpleusestate from './component/FechApi/Get/Simpleusestate';
import SimpleReducer from './component/FechApi/Get/SimpleReducer';
import UsestateTwo from './component/FechApi/Get/UsestateTwo';
import UsereducerTwo from './component/FechApi/Get/UsereducerTwo';
import Getfetch from './component/FechApi/Get/Getfetch';
import SsnMasking from './compny/SsnMasking';

function App() {
  return (
    <div className='App'>
      {/* <Fetch/> */}
      {/* <Navbar />
      <Routes>
        <Route path="/" component={<Home />}>home</Route>
        <Route path="/about" component={<About />}>About</Route>
      </Routes> */}
      {/* <UseContext/> */}
      {/* <Reducer/> */}
      {/* <SimpleGet/> */}
      {/* <Simpleusestate/>
      <SimpleReducer/> */}
      {/* <UsestateTwo/> */}
      {/* <UsereducerTwo/> */}
      {/* <Getfetch/> */}
      <SsnMasking/>
    </div>
  );
}

export default App;
