import React from "react";
import {Provider} from "react-redux"
import { Landing } from './components/Routing/Landing';

function App() {
  return (
    <React.Fragment>
      <Provider>
        <Landing/>
      </Provider>
    </React.Fragment>
  );
}

export default App;
