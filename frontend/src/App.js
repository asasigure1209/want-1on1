import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Top from "./pages/Top";
import Profiles from "./pages/Profiles";
import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route path="/profiles/:id">
            <Profiles />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
