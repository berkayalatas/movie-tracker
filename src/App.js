import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {WishList} from "./components/WishList"
import {Add} from "./components/Add"
import {Header} from "./components/Header"
import {Watched} from "./components/Watched"
import {Home} from "./components/Home"
import {Contact} from "./components/Contact"
import {NotFound} from "./components/NotFound"
import "./lib/font-awesome/css/all.min.css"

import {GlobalProvider} from './context/GlobalState'

function App() {
  const reload = () => window.location.reload();
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
            <WishList />
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