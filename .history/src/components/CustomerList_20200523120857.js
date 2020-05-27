import React, {Component} from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    render() {
        const customers = this.props.cutomers;
        return (
          <div className="data">
              <table className="ui celled table">
                <thead>
                     <tr>
                         <th style={{ width: '50px' , textAlign: "center"}}>#</th>
                         <th>Name</th>
                         <th>E-mail</th>
                         <th style={{ width: "148px"}}>Action </th>
                     </tr>
                    </thead>  

                    <tbody>
                        
                        
                    </tbody>
              </table> 

          </div>
        );
    }
}

export default CustomerList;