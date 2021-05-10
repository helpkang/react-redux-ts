
import 'App.css';
import React, { Suspense } from 'react';
// import { Todo } from 'views/todo/Todo';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from 'NotFound';

const Todo = React.lazy(() => import('views/todo/Todo'));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* <Route exact path={'/'} component={Todo}/> */}
            <Route exact path={'/'} component={Todo} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
