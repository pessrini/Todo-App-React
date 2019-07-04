import React, { Component } from 'react';

import Todo from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'


import './App.css'


class App extends Component {
   constructor(props){
       super(props);

       this.state={todos:[{}]}
 
   }

   componentWillMount(){
      fetch('https://jsonplaceholder.typicode.com/posts?limits=10')
      .then(response => response.json())
      .then( json => this.setState({todos: json}))
    
   }

  
  markComplete = (id) => {
     this.setState({ todos : this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
  }

  //delete Todo
  delTodo = (id) =>{


    console.log("delter todo",id)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id )]})

  }

  //add Todo
  addTodo = (title) => {
     const data = {
       title,
       completed: false
     }
// POST adds a random id to the object sent
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

  
    
  }


  render() {
    return (
      <div className="App">
       <div className="container">
        <Header />
        <AddTodo addTodo= {this.addTodo} />
        <Todo todos = {this.state.todos}  markComplete= {this.markComplete} delTodo= {this.delTodo}/> 
       </div>
      
      </div>
    );

  }
 
}

export default App;
