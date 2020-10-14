import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerView from '../view/playerview/PlayerView';
import TeamView from '../view/teamview/TeamView';
import LoginView from '../view/loginview/LoginView';
import Startpage from '../view/startpage/Startpage';

function Routing(props) {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/" component={Startpage} />
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/" component={PlayerView} />
                <Route exact path="/team" component={TeamView} />
                <Route exact path="/player" component={PlayerView} />               
            </Switch>
        </Router>
    )
}

export default Routing
