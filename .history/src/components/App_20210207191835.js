import React , {Component} from "react" ; 
import Home from "./Home";

class App extends Component {
    render () {
      return (
          <div>
           <div className="ui fixed inverted menu"> 
                  <div className="ui container"> 
                      <nav class="navbar navbar-dark bg-dark">
</nav>
           
           <div class="container">
    <a class="navbar-brand" href="#">Home</a>
  </div>
                      

          </div>
          </div>
          <div className="ui main container">
           <Home/>
          </div>
          </div>
      );
    }
}
export default App ; 