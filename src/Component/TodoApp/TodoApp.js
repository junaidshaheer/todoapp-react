import React, { Component } from 'react'
import"./TodoApp.css";
export default class TodoApp extends Component {
    render() {
        return (
            <div className="todo-container">
               <h1>Todo App</h1> 

               <form className="input-section">
                   <input type='text' placeholder="Enter Text..."/>
                    
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
