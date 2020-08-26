import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'

class Todos extends Component {
  render() {
    //we can access Appjs todos with props
    return this.props.todos.map((todoAppJS)=>(
        //setting the above map todoAppJS property to the todo and send it to todoitem and then acess it using props
        //setting value of markcomplete(first) with this.props.markcomplete
  <TodoItem key={todoAppJS.id} todo={todoAppJS} 
  delTodoItem={this.props.delTodoItem}
  markComplete={this.props.markComplete}/>
    ))
  }
}

//PropTypes

Todos.propTypes={
    todos:PropTypes.array.isRequired
}
export default Todos;
