import React, {Component} from "react" ; 

class Task extends Component {
    onDelete = () => {
        // console.log("task on delete");
         this.props.onDelete(this.props.task.id);
    };
    onEdit = () => {
      //console.log("task on edit ");
      this.props.onEdit(this.props.task);
    };
    render() {
        const {id,task_name,task_discription} = this.props.task;
        return (
            <tr>
                            <td style={{ textAlign: "center"}}>{id}</td>
                             <td>{task_name }</td>
                             <td>{task_discription}</td>
                            <td>
                                <button className="mini ui blue button" onClick={this.onEdit}> Edit</button>
                                <button className="mini ui red button" onClick={this.onDelete} > Delete</button>
                            </td>
                        </tr>
        );
    }
}
export default Task;