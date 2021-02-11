import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {WishList} from "./components/wishlist/WishList"
import {Add} from "./components/add/Add"
import {Header} from "./components/navbar/Header"
import {Watched} from "./components/watched/Watched"
import {Home} from "./components/Home"
import {Contact} from "./components/contact/Contact"
import {NotFound} from "./components/notFound_404/NotFound"
import GetMovies from './components/playing/GetMovies'
import GetTopRated from './components/topRated/GetTopRated'
import GetPopular from './components/popular/GetPopular'
import "./lib/font-awesome/css/all.min.css"
import {GlobalProvider} from './context/GlobalState'
import 'alertifyjs/build/css/alertify.min.css';

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

        <Route exact path="/playing">
            <GetMovies />
        </Route>

        <Route exact path="/popular">
            <GetPopular />
        </Route>

        <Route exact path="/top-rated">
            <GetTopRated />
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
