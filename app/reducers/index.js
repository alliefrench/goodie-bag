import axios from 'axios';

//action constants
const SET_CANDIES = 'SET_CANDIES';
const SET_CANDY = 'SET_CANDY';

//action creators
const setCandies = candies => ({ type: SET_CANDIES, candies });
const setCandy = candy => ({ type: SET_CANDY, candy });

//THUNKS
export const getCandies = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(setCandies(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCandy = candyId => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/candies/${candyId}`);
      dispatch(setCandy(data));
    } catch (error) {
      console.error(error);
    }
  };
};

const initialState = { candies: [], selectedCandy: {} };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return { candies: action.candies };
    case SET_CANDY:
      return { ...state, selectedCandy: action.candy, loading: false };
    default:
      return state;
  }
};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

export default rootReducer;
