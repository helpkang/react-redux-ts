import 'App.css';
import { Todo } from 'views/todo/Todo';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from 'NotFound';
function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path={'/'} component={Todo}/>
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
