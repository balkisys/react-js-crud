import React, {Component} from "react";
import Task from "./Task";

class TaskList extends Component {
         onDelete = id => {
             this.props.onDelete(id);
              //console.log("task list" , id);
              
         };
         onEdit = data => {
            this.props.onEdit(data);
            // console.log(task list" , id);
             
        };

    render() {
        const tasks = this.props.tasks;
        return (
          <div className="data">
              <table className="ui celled table">
                <thead>
                     <tr>
                         <th style={{ width: '50px' , textAlign: "center"}}>#</th>
                         <th>Task Name</th>
                         <th>Task Description</th>
                         <th style={{ width: "148px"}}>Action </th>
                     </tr>
                    </thead>  

                    <tbody>
                        {tasks.map(task=>{
                              return <Task 
                              task={task} 
                              key={task.id} 
                              onDelete={this.onDelete}
                              onEdit={this.onEdit}
                              />;
                              
                            })
                        }
                        
                    </tbody>
              </table> 

          </div>
        );
    }
}

export default TaskList;