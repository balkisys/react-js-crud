import React , {Component} from "react" ; 
import axios from "axios";
import MyForm from "./MyForm";
import TaskList from "./TaskList";
import "./app.css";
import Loader from "./Loader";

class App extends Component {
    state = {
    
        tasks: [],
        task:{},
        loader: false,
        url: "http://127.0.0.1:8000/api/todolists"
    };
    getTasks = async () => {
        this.setState({ loader:true});
        const tasks =  await axios.get(this.state.url);
        this.setState({ tasks: tasks.data, loader:false });
    }

       deleteTask =  async id => {
               this.setState({ loader : true});
             await  axios.delete(`${this.state.url}/${id}`);
             this.getTasks();
       } 
    
       createTask = async data => {
           this.setState({loader:true });
           await axios.post(this.state.url,{
               task_name: data.task_name,
               task_discription: data.task_discription,
               
           });
           this.getTasks();
       } ; 
         
       editTask = async (data) => {
          // clear task obj 
          this.setState({ task: {} , loader: true }) ; 
          await axios.put(`${this.state.url}/${data.id}`, {
            task_name: data.task_name,
            task_discription: data.task_discription,
          });
          this.getTasks();
       }

    componentDidMount(){
        this.getTasks();
    } 
   
       onDelete = id => { 
         // console.log ("app" , id );
         this.deleteTask(id);
       }
    
       onEdit = data => { 
          
        //console.log ("app" , data );
        this.setState({ task: data});
        
      }


      onFormSubmit = data => {
          //console.log("app" , data);
          if(data.isEdit) {
              this.editTask(data);
             // if is edit true
          } else {
                  // if is edit false
                  this.createTask(data);
          }
      };

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