import React, { Component } from 'react'
import"./TodoApp.css";
export default class TodoApp extends Component {
    handleChange = event =>{
        this.setState({
        input: event.target.value

    });
};
    render() { 
        const{ input } = this.state;

        return (
            <div className="todo-container">
                 <form className="input-section">
               <h1>Todo App</h1> 
               <input type="text" value={input} onChange={this.handleChange} placeholder="Enter items..." />

               
               </form>
               <ul>
                   <li>list <i className="fas fa-trash-alt"></i>
                   </li>
                   <li>list <i className="fas fa-trash-alt"></i>
                   </li>
                   <li>list <i className="fas fa-trash-alt"></i> 
                   </li>
               </ul>
            </div> 
        );
    
            }
}
