import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom"

export default class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'><p>This is HomePage</p></Route>
                    <Route path='/join' component={RoomJoinPage}><p>This is Join Page</p></Route>
                    <Route path='/create' component={CreateRoomPage}/>


                </Switch>
            </Router>
        )
    }
}