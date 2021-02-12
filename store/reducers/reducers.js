import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";
import {fetchData} from "../actions/actions";
let initaialState = {
    data: {},
    error: null,
    loading: true
};


export const startFetch = (state, action) => {
    fetchData();
    return updateObject( state, {
        error: null,
        loading:true
    })
};



export const fetchedSuccess = (state,action) => {
        return updateObject(state, {
            error:null,
            loading:false,
            data: action.data
        });
};

export const fetchedFail = (state,action) => {
        return updateObject(state, {
            error: action.error,
            loading: false,
        })
}

export const reducer = (state = initaialState, action) => {
  switch (action.type) {
    case actionTypes.SART_DATA_FETCH:
      return startFetch(state, action);
    case actionTypes.DATA_FETCH_SUCESS:
      return fetchedSuccess(state, action);
    case actionTypes.DATA_FETCH_FAIL:
      return fetchedFail(state, action);
    default:
      return state;
  }
};
