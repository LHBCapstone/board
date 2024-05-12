import {BrowserRouter, Route} from 'react-router-dom';
import PostView from './post/PostView';
import PostMain from './post/PostMain';

function App(){
  return(
    <div className = "App">
      <BrowserRouter>
        <Route exact path= '/postView/:no' compoent = {PostView} />
        <Route exact path= '/' component = {PostMain} />
      </BrowserRouter>
    </div>
  );
}

export default App;