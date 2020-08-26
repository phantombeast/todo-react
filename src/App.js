import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state={
    todos:[
      {
        id:1,
        title:'Take out trash',
        completed:false
      },
      {
        id:2,
        title:'Buy groceries',
        completed:false
      },
      {
        id:3,
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


  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
        <Header></Header>
        <AddTodo></AddTodo>
        {/* setting value of todos with above this.state.todos and sending it to Todo */}
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodoItem={this.delTodoItem}></Todos>
        </div>
       
      </div>
    );
  }
}

export default App;
