import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Motorcycles from '../Motorcycles/Motorcycles'
import History from '../History/History'
import FindDillers from '../FindDillers/FindDillers'
import Gallery from '../Gallery/Gallery'
import Racers from '../Racers/Racers'

export default class Routers extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/motorcycles" component={Motorcycles} />
                    <Route path="/history" render={()=><History timeline = {this.props.state.timeline}/>} />
                    <Route exact path="/racers" component={Racers} />
                    <Route exact path="/find-dillers" render ={()=> <FindDillers map={this.props.state.map}/>} />
                    <Route exact path="/gallery" component={Gallery} />
                </Switch>
            </>
        );
    }
}
