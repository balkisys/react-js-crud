import React , {Component} from "react" ; 
import Home from "./Home";

class App extends Component {
    render () {
      return (
          <div>
            
                  
              <nav class="navbar navbar-dark bg-dark">
                  <div class="container">
                      <a class="navbar-brand" href="#">Home</a>
                      <div class="topnav-right">
                      <a class="navbar-brand" href="#login">Login</a>
                      <a class="navbar-brand" href="#logout">Logout </a>
                 </div>
             </div>
              </nav>
           
           
                      

          
          
          <div className="ui main container">
           <Home/>
          </div>
          </div>
      );
    }
}
export default App ; 