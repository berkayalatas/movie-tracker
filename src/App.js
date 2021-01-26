import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
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

        <Route exact path="/contact">
            <Contact />
        </Route>

        <Route exact path="/watched">
            <Watched />
        </Route>

        <Route exact path="/wishlist">
            <WatchList />
        </Route>

        <Route exact path="/add">
            <Add />
        </Route>     

        <Route component={NotFound}/>
 
      </Switch>

    </Router>
    </GlobalProvider>
  </>
  );
}

export default App;