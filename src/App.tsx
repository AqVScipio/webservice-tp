import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';
import Header from './components/header/Header'
import Data from './components/models/Data'
import Search from './components/body/search-panel/Search';
import MediaList from './components/body/display-panel/MediaList';

const App : React.FC = () => {
  const location: string = window.location.pathname !== '/' ? window.location.pathname : Data.PATH_SEARCH_MOVIES;
  const [user, setUser] = useState('Visiteur')

  return (
    <Router>
      <div className="App">

        <Header location={location} user={user} />
        <Switch>
          <Route path={Data.PATH_SEARCH_MOVIES}>
            <Search mediaType='Movie' />
          </Route>

          <Route path={Data.PATH_SEARCH_TV}>
            <Search mediaType='TV Show' />
          </Route>

          <Route path={Data.PATH_FAVORITES}>
            <MediaList />
          </Route>

          <Route path={Data.PATH_SUGGESTIONS}>
            <Search />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
