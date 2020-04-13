import React from 'react';

const frutas = [
  'manzana',
  'naranja',
  'pera',
  'kiwi',
  'banana'
]

const numeros = [1, 2, 3, 4]

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {frutas.map((fruta) => {
            return (
              <li key={fruta}>{fruta}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App;
