import React, { Component } from 'react'
import"./TodoApp.css";
export default class TodoApp extends Component {
    state = {
        input: "",
        items:[]
    }
    handleChange = event =>{
        this.setState({
        input: event.target.value

    });
};
storeItems =event =>{
    event.preventDefault();
    const { input }= this.state;
  
    
    this.setState({
        items: [...this.state.items, input],
        input : ""
       
    });
};
    render() { 
        const{ input,items } = this.state;
        console.log(items);

        return (
            <div className="todo-container">
                 <form className="input-section" onSubmit={this.storeItems}>
               <h1>Todo App</h1> 
               <input type="text" value={input} onChange={this.handleChange} placeholder="Enter items..." />

               
               </form>
               <ul>
                   {items.map((data, index) => (
                       <li key={index}>
                           {data}  <i className="fas fa-trash-alt"></i>
                       </li>
                   )
                   )}
                  
               </ul>
            </div> 
        );
    
            }
}
