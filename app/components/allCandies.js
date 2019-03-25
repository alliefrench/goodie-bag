import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
    return (
      <Router>
        <div>
          <ul>
            {this.props.candies.map(candy => (
              <li key={candy.id}>
                <Link to={`/candies/${candy.id}`}>{candy.name}</Link>
                {/* <Route
                  exact
                  path={`/candies/${candy.id}`}
                  component={SingleCandy}
                  id={candy.id}
                /> */}
                <Route
                  exact
                  path={`/candies/${candy.id}`}
                  render={() => <SingleCandy id={candy.id} />}
                />
              </li>
            ))}
          </ul>
        </div>
      </Router>
    );
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
