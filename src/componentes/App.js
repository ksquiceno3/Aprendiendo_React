import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import BadgeNew from '../pages/badgeNew'
import Badges from '../pages/Badges'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/badges" component={Badges} />
                <Route path="/badge/new" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;