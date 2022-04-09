import {
  ActionReducer,
  ActionReducerMap,
  combineReducers
} from '@ngrx/store';

import {
  concat,
  filter,
  keyBy,
  map,
  merge,
  union
} from 'lodash';

import {
  State,
  Views as stateViews,
  ById as stateById
} from './medical-appointment.state';


import {
  CREATE_MEDICAL_APPOINTMENT_COMPLETED,
  DELETE_MEDICAL_APPOINTMENT_COMPLETED,
  GET_MEDICAL_APPOINTMENT_COMPLETED,
  UPDATE_MEDICAL_APPOINTMENT_COMPLETED
} from '../actions/action-types';

import * as fromActions from '../actions/medical-appointment.action';

import {
  EntityStatus
} from '../models/entity-status.enum';

type ActionsSupported = fromActions.CreateMedicalAppointment |
                        fromActions.DeleteMedicalAppointment |
                        fromActions.GetMedicalAppointments |
                        fromActions.UpdateMedicalAppointment;
/**
 * Initial state
 */
const initialState: State = {
  byId: {},
  views: {}
};

/**
 * Map of Reducers for the State
 */
const reducerMap: ActionReducerMap<State, any> = {
  byId: reducerById,
  views: reducerViews
};
/**
 * State reducer
 */
export const reducer: ActionReducer<State, any> = combineReducers(reducerMap);

/**
 * Reducer by ID
 * @param state Actual state
 * @param {ActionsSupported} action Action executed
 * @returns
 */
export function reducerById(state: stateById = {}, action: ActionsSupported ): any {
  const result = {...state};
  switch (action.type) {
    case GET_MEDICAL_APPOINTMENT_COMPLETED:
      const itemsRich = map(action.payload.items, (item) => ({data: item , refreshed: action.payload.timestamp}));
      return merge(result, keyBy(itemsRich, 'data.id'));
    case CREATE_MEDICAL_APPOINTMENT_COMPLETED:
    case UPDATE_MEDICAL_APPOINTMENT_COMPLETED:
      result[action.payload.medical.id] = {refreshed: action.payload.timestamp, data: action.payload.medical };
      return result;
    case DELETE_MEDICAL_APPOINTMENT_COMPLETED:
      delete result[action.payload.itemId];
      return result;
    default:
      return state;
  }
}
/**
 * Reducer for entity views
 * @param {stateViews} state Actual state
 * @param {ActionsSupported} action Action executed
 * @returns
 */
export function reducerViews(state: stateViews = {}, action: ActionsSupported): any {
  const result = {...state};
  let previous: string[];
  switch (action.type) {
    case GET_MEDICAL_APPOINTMENT_COMPLETED:
      previous = result[action.payload.view] ? result[action.payload.view].ids : [];
      result[action.payload.view] =  {
        ids: union(previous, map(action.payload.items, 'id')),
        refreshed : action.payload.timestamp,
        status: EntityStatus.COMPLETED,
        error: {}
      };
      return result;
    case UPDATE_MEDICAL_APPOINTMENT_COMPLETED:
      return result;
    case CREATE_MEDICAL_APPOINTMENT_COMPLETED:
      previous = result['*'] ? result['*'].ids : [];
      result['*'] = {
        ids: concat(previous, action.payload.medical.id),
        refreshed : action.payload.timestamp,
        status: EntityStatus.COMPLETED,
        error: {}
      };
      return result;
    case DELETE_MEDICAL_APPOINTMENT_COMPLETED:
      if (!result['*'] || !result['*'].ids) { return result; }
      const newIds = filter(result['*'].ids, id => id !== action.payload.itemId);
      result['*'] = {
        ids: newIds,
        refreshed : action.payload.timestamp,
        status: EntityStatus.COMPLETED,
        error: {}
      };
      return result;
    default:
      return state;
  }
}
