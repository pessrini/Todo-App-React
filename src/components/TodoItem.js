import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   getStyle= () => {
       return{
           backgroundColor: "#f4f4f4",
           padding : "10px",
           borderBottom : '1px',
           textDecoration : this.props.todo.completed ? 'line-through' : 'none'
       }
   }

    render() {
        const {id, title, completed} = this.props.todo
        return (
            <div style={this.getStyle()}>
             <p>
                 <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '} {title} 
                 <button style= {btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
             </p>
                 
            </div>
        )
    }
}

const btnStyle = {
     backgroundColor: '#ff0000',
     color: '#fff',
     border: 'none',
     padding : '5px 8px',
     borderRadius: '50%',
     float: 'right',
     cursor: 'pointer'

}

TodoItem.propTypes ={
    todo : PropTypes.object.isRequired
}


export default TodoItem
