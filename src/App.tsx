
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutAll from "./Layout.tsx/LayoutAll";
// import AddToCartButton from './user_side/component/AddToCartButton';
// 
const App = () => {
  return (
    <>
    {/* <AddToCartButton/> */}
    <Router>
      <div>
        {/* <h1>Hello World</h1> */}
        <LayoutAll/>
      </div>
    </Router>
    </>
  );
};

export default App;
