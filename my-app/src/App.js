import './App.css';
import ParentComponent from './components/ParentComponent';
// import Counter from './components/Counter';
// import { Greet, ReactGreet } from './components/Greet';
// import Greeting from './components/Greeting';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet />
      <ReactGreet /> */}
      {/* <Greeting name="JavaScript">Language of the Web</Greeting>
      <Greeting name="Golang" />
      <Greeting name="Swift">Language for iOS apps</Greeting>
      <hr />
      <Welcome name="React" />
      <Welcome name="React Native" />
      <Welcome name="Swift">Language for iOS apps</Welcome> */}
      {/* <Counter /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
