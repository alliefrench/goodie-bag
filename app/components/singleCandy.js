/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

class DisconnectedSingleCandy extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //   // console.log(this.props);
  //   // this.props.getCandy(this.props.match.params.id);
  // }

  render() {
    console.log(props);
    return (
      <div>foo</div>
      //   <img src={this.props.SelectedCandy.imageUrl} />
      //   <h3>{this.props.SelectedCandy.name}</h3>
      //   <p>{this.props.SelectedCandy.description}</p>
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  candies: state.candies,
  selectedCandy: state.selectedCandy,
});

const mapDispatchToProps = dispatch => ({
  getCandy: () => dispatch(getCandy()),
});

const SingleCandy = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectedSingleCandy);
export default SingleCandy;
