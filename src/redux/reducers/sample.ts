import * as types from "../types";

export interface SampleState {
  counter: number;
}

//export type SampleAction = unknown;
export interface SampleAction{
  count:number,
  type: string
};

const initialState: SampleState = {
  counter: 0,
};

export default (state = initialState, action: SampleAction): SampleState => {
  //console.log(`${action} ${state}`);
  switch (action.type) {
    case types.INCREMENT_ONE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case types.INCREMENT_BY_COUNT:
      return {
        ...state,
        counter: state.counter + action.count,
      };
    default:
      return state;
  }
};
