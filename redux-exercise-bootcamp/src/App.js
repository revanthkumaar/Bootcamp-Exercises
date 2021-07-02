import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/home.component'
import SiginPage from './pages/signin.component'
import BooksPage from './pages/books.component'
function App() {
  return (
    <div className="App">
      
      <Switch>
         <Route exact path='/home' component={HomePage}/>
          <Route path='/home/signin' component={SiginPage}/>
           <Route exact path='/books' component={BooksPage}/>
      </Switch>
       
    </div>
  );
}

export default App;
