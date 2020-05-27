import React , {Component} from "react" ; 
import axios from "axios";
import MyForm from "./MyForm";
import CustomerList from "./CustomerList";
import "./app.css";
import Loader from "./Loader";

class App extends Component {
    state = {
    
        customers: [],
        customer:{},
        loader: false,
        url: "http://127.0.0.1:8000/api/customers"
    };
    getCustomers = async () => {
        this.setState({ loader:true});
        const customers =  await axios.get(this.state.url);
        this.setState({ customers: customers.data, loader:false });
    }

       deleteCustomer =  async id => {
               this.setState({ loader : true});
             await  axios.delete(`${this.state.url}/${id}`);
             this.getCustomers();
       } 
    
       createCustomer = () => {} ; 


    componentDidMount(){
        this.getCustomers();
    } 
   
       onDelete = (id) => { 
         // console.log ("app" , id );
         this.deleteCustomer(id);
       }
    
       onEdit = (data) => { 
          
        //console.log ("app" , data );
        this.setState({ customer: data});
        
      }


      onFormSubmit = (data) => {
          //console.log("app" , data);
          if(data.isEdit) {
             // if is edit true
          } else {
                  // if is edit false
                  this.createCustomer(data);
          }
      };

    render () {
      return (
          <div>
          <div className="ui fixed inverted menu"> 
          <div className="ui container"> 
           
           <a href="/#" className="header item">
               React JS CRUD with laravel API
               </a>

          </div>
          </div>
          <div className="ui main container">
           <MyForm customer={this.state.customer}  onFormSubmit={this.onFormSubmit }     />
           {
               this.state.loader ? <Loader/> : ""
           }
           <CustomerList 
           customers={this.state.customers}
           onDelete={this.onDelete}
           onEdit={this.onEdit}
           
           />
          </div>
          </div>
      );
    }
}
export default App ; 