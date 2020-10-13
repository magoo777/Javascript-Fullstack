import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerView from '../view/PlayerView';
import Startpage from '../view/Startpage';

function Routing(props) {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/player" component={PlayerView} />
                <Route exact path="/" component={Startpage} />
            </Switch>
        </Router>
    )
}

export default Routing
