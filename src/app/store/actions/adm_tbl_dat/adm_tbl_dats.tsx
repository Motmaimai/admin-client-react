import {
    CREATE_ADM_TBL_DAT,
    RETRIEVE_ADM_TBL_DATS,
    UPDATE_ADM_TBL_DAT,
    DELETE_ADM_TBL_DAT,
    DELETE_ALL_ADM_TBL_DATS
  } from "./types";
import TutorialDataService from "../../services/tutorial/tutorials.service";
  
  
export const createAdmTblDats = (title: string, description: string) => async (dispatch: any) => {
  try {
    const res = await TutorialDataService.create({ title, description });

    dispatch({
      type: CREATE_ADM_TBL_DAT,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveAdmTblDats = () => async (dispatch: any) => {
  try {
    const res = await TutorialDataService.getAll();
    console.log(res);
    dispatch({
      type: RETRIEVE_ADM_TBL_DATS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAdmTblDats = (id: string, data: any) => async (dispatch: any) => {
  try {
    const res = await TutorialDataService.update(id, data);

    dispatch({
      type: UPDATE_ADM_TBL_DAT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteAdmTblDats = (id: string) => async (dispatch: any) => {
  try {
    await TutorialDataService.delete(id);

    dispatch({
      type: DELETE_ADM_TBL_DAT,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllAdmTblDats = () => async (dispatch: any) => {
  try {
    const res = await TutorialDataService.deleteAll();

    dispatch({
      type: DELETE_ALL_ADM_TBL_DATS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findAdmTblDatssByTitle = (title: string) => async (dispatch: any) => {
  try {
    const res = await TutorialDataService.findByTitle(title);

    dispatch({
      type: RETRIEVE_ADM_TBL_DATS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};