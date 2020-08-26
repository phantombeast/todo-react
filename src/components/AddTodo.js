import React, { Component } from 'react'

export class AddTodo extends Component {
    state={
    title:''
    }

    onChange=(e)=> this.setState({title:e.target.value})
    render() {
        return (
            <form>
                <input
                type="text"
                name="title"
                style={{ flex: '10', padding: '5px' }}
                placeholder="add todo"
                value={this.state.title}
                onChange={this.onChange}
                ></input>
                <input
                  type="submit" 
                  value="Submit" 
                  className="btn"
                  style={{flex: '1'}}   
                 >
               
                </input>
            </form>
        )
    }
}

export default AddTodo
