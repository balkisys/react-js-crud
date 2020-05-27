import React , {Component} from "react" ;


class MyForm extends Component {
    state = {
        form: {first_name:'' , last_name:'', email:'', isEdit: false},
        btnName: "Save",
        btnClass:"ui primary button submit-button"
    }; 
    isEmpty(obj){
        return Object.entries(obj).length === 0  && obj.constructor === Object;

    }
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.customer)) {
           this.setState({
               form: {...this.props.customer, isEdit: true},
               btnName: "Update",
               btnClass: "ui orange button submit-button"
           });
           
            // console.log("update");
        }

    }

   render() {
       return (
      <form className= "ui form"> 
       <div className="fields">
           <div className="four wide field"> 
           <label> First Name </label>
           <input type="text" name="first_name" placeholder="First Name" />
           </div>

           <div className="four wide field"> 
           <label> Last Name </label>
           <input type="text" name="last_name" placeholder="Last Name" />
           </div>

           <div className="four wide field"> 
           <label> E-mail </label>
           <input type="email" name="email" placeholder="name@gmail.com" />
           </div>

           <div className="four wide field"> 
           <button  className={this.state.btnClass}>
                {this.state.btnName}
                </button>
           </div>

       </div>
      </form>
       );
   }


}
export default MyForm ;