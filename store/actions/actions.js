import * as actionTypes from "./actionTypes";
import axios from "axios";

export const startFetch = () => {
    return {
        type: actionTypes.SART_DATA_FETCH
    };
};



export const fetchedSuccess = (data) => {
        return {
        type: actionTypes.DATA_FETCH_SUCESS,
        res: data
    };
}

export const fetchedFail = (error) => {
        return {
        type: actionTypes.DATA_FETCH_FAIL,
        err: error
    };
}

export const fetchData = () => {
  return dispatch => {
    dispatch(startFetch());
    axios
      .get("https://randomuser.me/api/")
      .then(res => {
        dispatch(fetchedSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchedFail(err));
      });
  };
};