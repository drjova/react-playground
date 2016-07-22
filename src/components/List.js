import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  addCountry,
  removeCountry
} from '../actions/count';

class Items extends Component {

  constructor(props) {
    super(props);
    this.triggerClick = this.triggerClick.bind(this);
  }

  triggerClick(params) {
    this.props.dispatch(params);
  }

  isChecked(value) {
    return this.props.visited.indexOf(value) > -1;
  }

  render() {
    const { items, visited, count } = this.props;
    return (
      <div>
        <h2>{count}</h2>
        <ul>
          {items.map((item, i) =>
            <Item isChecked={this.isChecked(item.name)} trigger={this.triggerClick} item={item} key={item.name} />
          )}
        </ul>
      </div>
    )
  }
}

class Item extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isSelected = this.props.isChecked;
  }

  handleClick(e) {
    this.props.trigger(
      (this.isSelected) ? removeCountry(e.target.value) : addCountry(e.target.value)
    );
    this.isSelected = e.target.checked;
  }

  render() {
    const {item, key, isChecked} = this.props;
    return (
      <li key={key}>
        <input
          ref="checkbox"
          type="checkbox"
          defaultChecked={this.isSelected}
          defaultValue={item.name}
          onChange={this.handleClick} />
          {item.name}
        </li>
    )
  }
}

export default connect(
  state => {
    return {
      items: state.countries.items || [],
      visited: state.countries.visited || ['Brazil'],
      count: (state.countries.visited || ['Brazil']).length
    }
  }
)(Items);
