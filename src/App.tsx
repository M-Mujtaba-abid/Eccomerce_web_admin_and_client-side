
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutAll from "./Layout.tsx/LayoutAll";

const App = () => {
  return (
    <Router>
      <div>
        {/* <h1>Hello World</h1> */}
        <LayoutAll/>
      </div>
    </Router>
  );
};

export default App;
