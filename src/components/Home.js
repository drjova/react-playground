import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/count';

function Home({ number, increase, decrease }) {
  return (
    <div>
      Some state changes:
      {number}
      <br/>
      <button onClick={e => {
          e.preventDefault()
          increase(1)
        }}>Increase</button>
      <button onClick={e => {
          e.preventDefault()
          decrease(1)
        }}>Decrease</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increase: n => {
      dispatch(increase(n));
    },
    decrease: n => {
      dispatch(decrease(n));
    }
  }
}

export default connect(
  state => ({ number: state.count.number }),
  mapDispatchToProps
)(Home);
