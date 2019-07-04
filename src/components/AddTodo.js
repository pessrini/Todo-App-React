import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            title : ''
        };
        this.onchange = this.onchange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }


    onchange= (e) =>{
       this.setState({title: e.target.value})
    }

    onSubmit = (e) => { 
        e.preventDefault();
        this.props.addTodo(this.state.title)
    }
     

    render() {
        return (
            <form style={{ display: 'flex' }}  onSubmit={this.onSubmit}>
                <input type="text" style={{ flex: '10', padding: '26px' }} placeholder=" Add Todo ..." value={this.state.title} onChange={this.onchange}/>
                <input type="submit" value="Submit" className="btn" style={{ flex: '1' }}  />

            </form>
        )
    }
}

export default AddTodo
