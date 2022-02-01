import {
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
} from "../types";
import { deleteApi } from "./api";

export const deleteProjectRequest = () => ({
  type: DELETE_PROJECT_REQUEST,
});

export const deleteProjectSuccess = (data) => ({
  type: DELETE_PROJECT_SUCCESS,
  data: data,
});

export const deleteProjectFailure = (error) => ({
  type: DELETE_PROJECT_FAILURE,
  error,
});

export const fetchDeleteProject = (data) => (dispatch, getState) => {
  dispatch(deleteProjectRequest());

  return deleteApi(`/projects/${data?.id}`, data)
    .then((data) => {
      dispatch(deleteProjectSuccess(data));
      return data?.data?.data ?? data?.data ?? data;
    })
    .catch((error) => {
      dispatch(deleteProjectFailure(error));
    });
};
