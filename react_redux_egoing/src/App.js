import { Component } from 'react';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
          <AddNumberRoot></AddNumberRoot>
          <DisplayNumberRoot></DisplayNumberRoot>
      </div>
    )
  }
}

export default App;
