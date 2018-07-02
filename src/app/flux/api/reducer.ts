import { FETCHING_AVAILABILITIES } from './types';
const defaultState = {
  isInitialized: false
};

export default function support(state = defaultState, action: any) {
  switch (action.type) {
    case `${FETCHING_AVAILABILITIES}_FULFILLED`:
      return {
        ...state,
        isInitialized: true
      };

    case `${FETCHING_AVAILABILITIES}_REJECTED`:
      return {
        ...state,
        isInitialized: false
      };
    case `${FETCHING_AVAILABILITIES}_PENDING`: return state;
    default: return state;
  }
}
