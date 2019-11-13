import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './Global.css'
import BadgeNew from './pages/badgeNew'
import Badges from './pages/Badges'

const container = document.getElementById('app')

ReactDOM.render(<Badges/>,
    container)