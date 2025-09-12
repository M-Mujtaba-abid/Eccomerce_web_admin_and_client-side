

// import { BrowserRouter as Router } from "react-router-dom";
import LayoutAll from "./Layout.tsx/LayoutAll";
import Loader from "./user_side/component/Loader";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store"; // apne path ke hisaab se
import { HashRouter } from "react-router-dom";

const App = () => {
  const loading = useSelector((state: RootState) => state.loader.loading);

  return (
    <>
      {loading && <Loader />}
      <HashRouter>
        <LayoutAll />
      </HashRouter>
    </>
  );
};

export default App;
