import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/App.css";
import Home from "./Home";
import Header from "./Header";
import Favorites from "./Favorites";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchData, fetchMetaData } from "../store/jokes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchMetaData());
  }, [dispatch]);

  return (
    <div className="app">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
