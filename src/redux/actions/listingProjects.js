import {
  FETCH_PROJECTS_LISTING_REQUEST,
  FETCH_PROJECTS_LISTING_SUCCESS,
  FETCH_PROJECTS_LISTING_FAILURE,
} from "../types";
import { getApi, postApi } from "./api";

export const listingPorjectRequest = () => ({
  type: FETCH_PROJECTS_LISTING_REQUEST,
});

export const listingPorjectSuccess = (data) => ({
  type: FETCH_PROJECTS_LISTING_SUCCESS,
  data: data,
});

export const listingPorjectFailure = (error) => ({
  type: FETCH_PROJECTS_LISTING_FAILURE,
  error,
});

export const fetchListingPorject = (data) => (dispatch, getState) => {
  dispatch(listingPorjectRequest());

  return getApi(`/projects`, data)
    .then((data) => {
      console.log(data);
      dispatch(listingPorjectSuccess(data));
    })
    .catch((error) => {
      dispatch(listingPorjectFailure(error));
    });
};
