import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from'./Component/About/About';
import Classes from './Component/Classes/Classes'
import Contactus from './Component/Contactus/Contactus';
import Notfound from './Component/Not-found/Notfound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    // router section 
    <div className="App">
    <Router>
        <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Class">
          <Classes/>
        </Route>
        <Route path="/Contactus">
          <Contactus/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
      </Switch>
        <br/>
        <Footer/>
    </Router>
   
    </div>
  );
}

export default App;
