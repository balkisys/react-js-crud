import React , {Component} from "react" ;


class MyForm extends Component {
   render() {
       return (
      <from className= "ui form"> 
       <div className="fields">
           <div className="four wide field"> 
           <label> First Name </label>
           <input type="text" name="first_name" placeholder="First Name" />
           </div>

           <div className="four wide field"> 
           <label> Last Name </label>
           <input type="text" name="last_name" placeholder="Last Name" />
           </div>

       </div>
      </from>
       );
   }


}
export default MyForm ;