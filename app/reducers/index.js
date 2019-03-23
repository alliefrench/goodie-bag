import axios from 'axios';

//action constant
const SET_CANDIES = 'SET_CANDIES';

//action creator
const setCandies = candies => ({ type: SET_CANDIES, candies });

//THUNK
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

const initialState = { candies: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return { candies: action.candies };
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
