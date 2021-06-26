import { createSelector, createSlice, Dispatch } from '@reduxjs/toolkit';
import { fetchStatistics } from '../../apis/common';
import { IRootState, IStatisticsState } from '../../interfaces/IState';

const initialState: IStatisticsState = {
  numberOfOrders: 0,
  numberOfOrdersOfPreviousDay: 0,
  revenueOfPreviousDay: 0,
  revenueOfTheDay: 0
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setStatistics(state, action) {
      const {
        numberOfOrders,
        numberOfOrdersOfPreviousDay,
        revenueOfPreviousDay,
        revenueOfTheDay
      } = action.payload;
      state.numberOfOrders = numberOfOrders;
      state.numberOfOrdersOfPreviousDay = numberOfOrdersOfPreviousDay;
      state.revenueOfTheDay = revenueOfTheDay;
      state.revenueOfPreviousDay = revenueOfPreviousDay;
    }
  }
});

const { setStatistics } = statisticsSlice.actions;

export const getStatisticsAction = () => async (dispatch: Dispatch) => {
  return fetchStatistics().then(statistics => {
    dispatch(setStatistics(statistics));
  });
};

const statisticsState = (state: IRootState) => state.statistics;
const selector = function<T>(combiner: { (state: IStatisticsState): T }) {
  return createSelector(statisticsState, combiner);
};

export const getStatistics = () => selector(state => state);

export default statisticsSlice.reducer;
