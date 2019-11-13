import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './Global.css'
import BadgeNew from './pages/badgeNew'

// const jsx = <h1>Hello, Patzi Badges</h1>
// const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi')
// const name = "Aichard"
// const element = React.createElement('h1',{},`Hola soy ${name}`)
// const element = <h1>Hola soy, {name}</h1>
// const container = document.getElementById('app')

// const element = (
//     <div>
//         <h1>Hola, soy Yo</h1>
//         <p>Soy aprendiz</p>
//     </div>
// )

const container = document.getElementById('app')
ReactDOM.render(<BadgeNew/>,
    container)