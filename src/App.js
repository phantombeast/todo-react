import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios';

import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';





class App extends Component {
  state={
    todos:[
    ]
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').
    then(res =>{ this.setState({todos:res.data})
    })
    
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
  axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).
 then(res=>{this.setState({
  todos: [...this.state.todos.filter(todo=>
    todo.id!==id)]
  
}) })
 ;
 console.log(id)
}

//Add todo

addTodo=(title)=>{
  axios.post('http://jsonplaceholder.typicode.com/todos',{
    title,
    complete:false
  }).
  then(res=>{ this.setState({todos:[...this.state.todos,res.data]})})

  
}
  render() {
    console.log(this.state.todos)
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header></Header>
        <Route exact path="/" render={props=>(
         <React.Fragment>
             <AddTodo addTodo={this.addTodo}></AddTodo>
        {/* setting value of todos with above this.state.todos and sending it to Todo */}
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodoItem={this.delTodoItem}></Todos>
         </React.Fragment> 
        )}/>
       <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
