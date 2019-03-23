import React from 'react';
import { connect } from 'react-redux';
import { getCandies } from '../reducers/index';
import SingleCandy from './singleCandy';

class DisconnectedAllCandies extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getCandies();
  }

  render() {
    return this.props.candies.map(candy => <SingleCandy candy={candy} />);
  }
}

const mapStateToProps = state => ({ candies: state.candies });

const mapDispatchToProps = dispatch => ({
  getCandies: () => dispatch(getCandies()),
});

const AllCandies = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedAllCandies);

export default AllCandies;
