import React from 'react'

class App2 extends React.Component {
    state = {
        products: [//producto es una propiedad el cual es un array de objetos
            //con informacion de productos
            {
                id: 1,
                nombre: "camisa a cuadros",
                color: ['#467367', '#05fd88', '#a706ee'],
                precio: 20
            },
            {
                id: 2,
                nombre: "pantalon corot",
                color: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF'],
                precio: 18
            },
            {
                id: 3,
                nombre: "zapatillas",
                color: ['#804342', '#FFD2D1', '#FF8785', '#806969'],
                precio: 22
            }
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map((producto) => (
                        <div>
                            <li>{producto.nombre}  --  ${producto.precio}</li>
                            <div>
                                {producto.color.map((color) => (
                                    <span
                                        style={{
                                            width: '13px',
                                            height: '13px',
                                            borderRadius: '0.1em',
                                            border: '1px solid gray',
                                            display: 'inline-block',
                                            margin: '0.1em',
                                            background: color
                                        }}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

export default App2