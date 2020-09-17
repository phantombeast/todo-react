import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';
uuidv4()



class App extends Component {
  state={
    todos:[
      {
        id:uuidv4(),
        title:'Take out trash',
        completed:false
      },
      {
        id:uuidv4(),
        title:'Buy groceries',
        completed:false
      },
      {
        id:uuidv4(),
        title:'Clean House',  
        completed:true
      }
    ]
  }
  //Toggle Completed
  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed
      }
      return todo
    })})
}

//Delete Todo

delTodoItem=(id)=>{
 this.setState({
   todos: [...this.state.todos.filter(todo=>{
     todo.id!==id
   })]
 });
 console.log(id)
}

//Add todo

addTodo=(title)=>{
  const newTodo={
    id:uuidv4(),
    title,
    completed:false
  }

  this.setState({todos:[...this.state.todos,newTodo]})
}
  render() {
    console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header></Header>
        <Route path="/" render={props=>(
         <React.Fragment>
             <AddTodo addTodo={this.addTodo}></AddTodo>
        {/* setting value of todos with above this.state.todos and sending it to Todo */}
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodoItem={this.delTodoItem}></Todos>
         </React.Fragment> 
        )}/>
       <Route path="/about" Component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
