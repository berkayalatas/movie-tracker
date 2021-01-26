import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import {WatchList} from "./components/WatchList"
import {Add} from "./components/Add"
import {Header} from "./components/Header"
import {Watched} from "./components/Watched"
import {Home} from "./components/Home"
import {Contact} from "./components/Contact"
import {NotFound} from "./components/NotFound"
import "./lib/font-awesome/css/all.min.css"

import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
  <>
  <GlobalProvider>
    <Router>
      <Header />

      <Switch>

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/contact">
            <Contact />
        </Route>

        <Route path="/watched">
            <Watched />
        </Route>

        <Route path="/wishlist">
            <WatchList />
        </Route>

        <Route path="/add">
            <Add />
        </Route>     

        <Route path="/404">
          <NotFound/>
        </Route>

        <Route path="*">
            <Redirect to="/404" />
        </Route>   

      </Switch>

    </Router>
    </GlobalProvider>
  </>
  );
}

export default App;