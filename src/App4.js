import React from 'react'
const users = [
    { id: 1, nombre: "alexis", edad: 28 },
    { id: 2, nombre: "bruno", edad: 29 },
    { id: 3, nombre: "baloy", edad: 30 }
]
class App4 extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.nombre}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default App4