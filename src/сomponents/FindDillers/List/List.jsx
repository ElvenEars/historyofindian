import React, { Component } from 'react';
import css from './List.module.css'
import Scrollbar from 'react-scrollbars-custom';

class ListElement extends Component {
    clearPhone() {
        return this.props.phone.replace(/[^+\d]/g, '');
    }
    render() {
        return (
            <div className={css.flex_element}>
                <div className={css.title}> {this.props.title}</div>
                <div className={css.street}> {this.props.street}</div>
                <div className={css.phone}><a href={`tel:${this.clearPhone()}`}>{this.props.phone}</a></div>
            </div>
        );
    }
}


export default class List extends Component {
    constructor(props) {
        super(props);
        this.mapAustralia = this.props.map.australia.map(m => <ListElement title={m.title} street={m.street} phone={m.phone} />)
        this.mapUSA = this.props.map.usa.map(m => <ListElement title={m.title} street={m.street} phone={m.phone} />)
        this.mapRussia = this.props.map.russia.map(m => <ListElement title={m.title} street={m.street} phone={m.phone} />)
    }
    render() {
        return (
            <Scrollbar className={css.scroll_container}>

                <div className={css.country_title}> Australia </div>
                <div className={css.flex_container} >
                    {this.mapAustralia}
                </div>
                <div className={css.country_title}> USA </div>
                <div className={css.flex_container} >
                    {this.mapUSA}
                </div>
                <div className={css.country_title}> Russia </div>
                <div className={css.flex_container} >
                    {this.mapRussia}
                </div>

            </Scrollbar>
        );
    }
}
