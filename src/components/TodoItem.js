import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    // getStyle=()=>{
    //     if(this.props.todo.completed){
    //         return {
    //             textDecoration:'line-through',
    //             backgroundColor:'#D3D3D3'
    //         }
    //     }else{
    //         return {
    //             textDecoration:'none'
    //         }
    //     }
    // }

    getStyle=()=>{
        return {
            background:'#D3D3D3',
            padding:'10px',
            border:'1px #ccc dotted',
            textDecoration:this.props.todo.completed?
            'line-through':'none'
        }
    }

    

    render() {
        const {id,title}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* we are transferring markComplete to parent component so that 
                    state can be changed and it can be changed using todos id */}
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}></input>
                    {title}</p>
                <button onClick={this.props.delTodoItem.bind(this,id)} 
                style={btnStyle}>x</button>    
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}

const btnStyle={
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
}

export default TodoItem;
