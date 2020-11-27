import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PlayerView from '../view/playerview/PlayerView';
import TeamView from '../view/teamview/TeamView';
import LoginView from '../view/loginview/LoginView';
import StartPage from '../view/startpage/StartPage';

function Routing(props) {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/team" component={TeamView} />
                <Route exact path="/player" component={PlayerView} />
            </Switch>
        </Router>
    )
}

export default Routing
