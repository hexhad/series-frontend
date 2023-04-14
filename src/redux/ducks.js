export const SERIES_DETAILS = "SERIES_DETAILS";

export const selectedSeries = (payload) => ({
  type: SERIES_DETAILS,
  payload,
});

const initialState = {
  series: {},
};

const seriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERIES_DETAILS:
      return { ...state, series: action.payload };
    default:
      return state;
  }
};


export default seriesReducer;