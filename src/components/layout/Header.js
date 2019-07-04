import React from 'react'

export default function Header() {
    return (
        <div style={headerStyle}>
            <h1>ToDoLIst</h1>
        </div>
    )
}


const headerStyle= {
      textAlign: 'center',
      backgroundColor: 'Black',
      color: 'white',
      padding: '10px'

}