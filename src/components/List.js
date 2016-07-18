import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  addCountry,
  removeCountry
} from '../actions/count';

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.handleAddCountry = this.handleAddCountry.bind(this);
    this.handleRemoveCountry = this.handleRemoveCountry.bind(this);
  }

  handleAddCountry(e) {
    console.log('Clicked', e);
    this.props.dispatch(addCountry());
  }

  handleRemoveCountry(name) {
    this.props.dispatch(removeCountry(name));
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, i) =>
          <li key={item.name}>
            <input
              ref="checkbox"
              type="checkbox"
              onChange={this.handleAddCountry} />
              {item.name}
            </li>
        )}
      </ul>
    )
  }
}

export default connect(
  state => {
    console.log('LIST', state.countries);
    return {
      items: state.countries.items || [],
      visited: state.countries.visited || []
    }
  }
)(Item);
