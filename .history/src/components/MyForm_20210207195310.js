import React , {Component} from "react" ;


class MyForm extends Component {
    state = {
        form: {task_name:'' , task_discription:'',isEdit: false},
        btnName: "Save",
        btnClass:"ui primary button submit-button"
    }; 
    isEmpty(obj){
        return Object.entries(obj).length === 0  && obj.constructor === Object;

    }
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.task)) {
           this.setState({
               form: {...this.props.task, isEdit: true},
               btnName: "Update",
               btnClass: "ui orange button submit-button"
           });
           
            // console.log("update");
        }

    }
  
    handleChange = event => {
        const {name, value } = event.target;
        let form = this.state.form;
        form[name] = value ; 
        this.setState({ form });
    };

    onFormSubmit = (event) =>  {
       // prevent form submit 
       event.preventDefault();
       // form validation 
      if (this.formValidation()) {
          // send form data to app 
          this.props.onFormSubmit(this.state.form);
      }
      // change the button to save
      this.setState({
          btnName: "Save",
          btnClass: "ui primary button submit-button"
      })
      // clear form fields
      this.clearFormFields()
    };
    formValidation = () => {
        // task name
        if(document.getElementsByName("task_name")[0].value === "" ){
           alert('Enter task name') ;
           return false ; 
        }
        //task description
        if(document.getElementsByName("task_discription")[0].value === "" ){
            alert('Enter task description ') ;
            return false ; 
         }
         
         return true ;
       
    };
   clearFormFields = () => {
       // change form state
       this.setState({
        form: {task_name:'' , task_discription:'',  isEdit: false}

       });
       // clear form fields 
       document.querySelector(".form").reset();
   };

   render() {
       return (
      <form className= "ui form"> 
       <div className="fields">
           <div className="six wide field"> 
           <label> Task Name </label>
           <input
            type="text" 
            name="task_name"
            placeholder="Task Name" 
            onChange={this.handleChange}
            value={this.state.form.task_name} />
           </div>

           <div className="six wide field"> 
           <label> Task Description </label>
           <input 
           type="text"
            name="task_discription" 
            placeholder="Task Description"
            onChange={this.handleChange}  
            value={this.state.form.task_discription} />
           </div>

           <div className="four wide field"> 
           <button  className={this.state.btnClass} onClick={this.onFormSubmit}>
                {this.state.btnName}
                </button>
           </div>

       </div>
      </form>
       );
   }


}
export default MyForm ;