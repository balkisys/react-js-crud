import React , {Component} from "react" ; 
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import "./app.css";

class App extends Component {
    state = {
    
        customers: [],
        url: "http://127.0.0.1:8000/api/customers"
    };
    getCustomers = () => {
        const customers = 
    } ;

    render () {
      return (
          <div className="ui fixed inverted menu"> 
          <div className="ui container"> 
           
           <a href="/#" className="header item">
               React JS CRUD with laravel API
               </a>

          </div>
          <div className="ui main container">
           <MyForm/>
           <CustomerList/>
          </div>
          </div>
      );
    }
}
export default App ; 