/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { getCandy } from '../reducers/index';

class DisconnectedSingleCandy extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getCandy(this.props.id);
  }
  render() {
    console.log(this.props);
    if (this.props.loading) return <div>Loading...</div>;
    // return <div>BANANAS</div>;
    return <div>{this.props.selectedCandy.name}</div>;
  }
}

const mapStateToProps = state => ({
  selectedCandy: state.selectedCandy,
  loading: state.loading,
});
const mapDispatchToProps = dispatch => ({
  getCandy: id => dispatch(getCandy(id)),
});

const SingleCandy = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedSingleCandy);

export default SingleCandy;
