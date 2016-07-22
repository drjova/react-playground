import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  getCountriesIfNeeded,
  increase,
  decrease
} from '../actions/count';

import Item from './List';

class Home extends Component {

  constructor(props){
    super(props);
    this.handleDecreaseClick = this.handleDecreaseClick.bind(this);
    this.handleIncreaseClick = this.handleIncreaseClick.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(getCountriesIfNeeded());
  }

  handleIncreaseClick(e) {
    e.preventDefault();

    this.props.dispatch(increase(1));
  }

  handleDecreaseClick(e) {
    e.preventDefault();

    this.props.dispatch(decrease(1));
  }

  render() {
    const {isFetching, countries, number, increase, decrease} = this.props;
    return (
      <div>
        <button onClick={this.handleIncreaseClick}>Increase</button>
        <button onClick={this.handleDecreaseClick}>Decrease</button>
        {number}
        <br />
        {isFetching && 'Loading'}
        <br />
        <Item />
      </div>
    )
  }
}

//const mapDispatchToProps = (dispatch, ownProps) => {
  //return {
    //increase: n => {
      //dispatch(increase(n));
    //},
    //decrease: n => {
      //dispatch(decrease(n));
    //}
  //}
//}

export default connect(
  state => {
    return {
      isFetching: state.countries.isFetching || false,
      countries: state.countries.items || [],
      number: state.count.number
    }
  }
)(Home);
