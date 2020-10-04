import Search from 'react-search'
import React, { Component, PropTypes } from 'react'
import api from '../../services/api';

class TestComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { repos: [] }
    }

    getItemsAsync(searchValue, cb) {
        let url = api.url;
        fetch(url).then((response) => {
            return response.json();
        }).then((results) => {
            if (results.items != undefined) {
                let items = results.items.map((res, i) => { return { id: i, value: res.full_name } })
                this.setState({ repos: items })
                cb(searchValue)
            }
        });
    }

    render() {
        return (
            <div>
                <Search items={this.state.repos}
                    multiple={true}
                    getItemsAsync={this.getItemsAsync.bind(this)}
                    onItemsChanged={this.HiItems.bind(this)} />
            </div>
        )
    }
}
