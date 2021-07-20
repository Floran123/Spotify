import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import { 
  Header, 
  Home, 
  Albums, 
  Album, 
  Artists, 
  Artist,
  Genres,
  Genre,
  Search
} from './components';

function App() {

  const routes = [
    { path: '/albums', component: Albums },
    { path: '/album/:id', component: Album },
    { path: '/artists', component: Artists },
    { path: '/artist/:id', component: Artist },
    { path: '/genres', component: Genres },
    { path: '/genre/:id', component: Genre },
    { path: '/home', component: Home },
    { path: '/search', component: Search },
  ]

  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {routes.map((r, i) => <Route path={r.path} component={r.component} key={i}/>)}
          <Route exact path="*">
              <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;