import React from 'react'

class App3 extends React.Component {
    //inicializamos el estado
    state = {
        user: {
            nombre: "Alexis",
            pais: "Argentina",
            youtube: "alexis.youtube.com"
        }
    }
    render() {
        const { user } = this.state
        const keys = Object.keys(user)//esto devuelve un array
        //es decir [nombre,pais,youtube] de user
        return (
            <div>
                <ul>
                    {keys.map((key) => (
                        <li><strong>{key}:</strong> {user[key]}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default App3