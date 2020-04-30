import React, { Component } from 'react';
import css from './List.module.css'
import {For} from '@babel/core'

class ListElement extends Component {
    render() {
        return (
            <div>
                <div className={css.title}> {this.props.title}</div>
                <div className={css.street}> {this.props.street}</div>
                <div className={css.phone}>{this.props.phone}</div> 
            </div>
        );
    }
}


export default class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>

            </>
        );
    }
}
