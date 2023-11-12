// import logo from './logo.svg';
import "./App.css";
import Basic_props from "./components/basic-props";
import Child_props from "./components/Childe_props";

function App() {
  return (
    <div className="App">
      <Basic_props abc="akash" />
      <Child_props name="this is main props">
        <p>This is childern props_1</p>
      </Child_props>
     
     
    </div>
  );
}

export default App;
