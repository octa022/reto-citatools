import { InjectionToken } from "@angular/core";
import { ActionReducerMap } from "@ngrx/store";

import * as fromMedical from './medical-appointment';

/**
 * Global state for the application
 */
export interface AppState {
  medicalAppointment: fromMedical.State
}
/**
 * Composite reducers for the application
 */
export const reducers: ActionReducerMap<AppState, any> = {
  medicalAppointment: fromMedical.reducer
}
/**
 * Token to inject into the app.module
 */
export const REDUCER_TOKEN = new InjectionToken<
  ActionReducerMap<AppState>
>('Registered Reducers');
/**
 * Function that is used in the injector
 */
export function getReducers() {
  return reducers;
}
