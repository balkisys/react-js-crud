import React , {Component} from "react" ; 
import axios from "axios";
import MyForm from "./MyForm";
import TaskList from "./TaskList";
import "./app.css";
import Loader from "./Loader";

class App extends Component {
    render () {
      return (
          <div>
          <div className="ui fixed inverted menu"> 
          <div className="ui container"> 
           
           <a href="/#" className="header item">
                          React JS TODOLIST  with laravel API Acceuil
               </a>
                      

          </div>
          </div>
          <div className="ui main container">
           <MyForm task={this.state.task}  onFormSubmit={this.onFormSubmit }     />
           {
               this.state.loader ? <Loader/> : ""
           }
           <TaskList 
           tasks={this.state.tasks}
           onDelete={this.onDelete}
           onEdit={this.onEdit}
           
           />
          </div>
          </div>
      );
    }
}
export default App ; 