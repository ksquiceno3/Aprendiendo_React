import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import BadgeNew from '../pages/badgeNew'
import Badges from '../pages/Badges'
import BadgeEdit from '../pages/badgeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import NotFound from '../pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badge/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
