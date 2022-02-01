import {
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_SUCCESS,
  EDIT_PROJECT_FAILURE,
} from "../types";
import { putApi } from "./api";

export const editProjectRequest = () => ({
  type: EDIT_PROJECT_REQUEST,
});

export const editProjectSuccess = (data) => ({
  type: EDIT_PROJECT_SUCCESS,
  data: data,
});

export const editProjectFailure = (error) => ({
  type: EDIT_PROJECT_FAILURE,
  error,
});

export const fetchEditProject = (data) => (dispatch, getState) => {
  dispatch(editProjectRequest());

  return putApi(`/projects/${data?.id}`, data)
    .then((data) => {
      dispatch(editProjectSuccess(data));
      return data?.data?.data ?? data?.data ?? data;
    })
    .catch((error) => {
      dispatch(editProjectFailure(error));
    });
};
