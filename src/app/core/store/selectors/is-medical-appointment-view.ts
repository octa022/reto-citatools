import { createSelector } from '@ngrx/store';

import { State } from '../medical-appointment/medical-appointment.state';

import { EntityStatus } from '../models/entity-status.enum';

import { getMedicalAppointmentSlice } from './get-medical-appointment-slice';

/**
 * Indicates if the "Medical Appointments" list is available
 * @returns boolean
 */
export const isMedicalAppointmentSlice = createSelector(getMedicalAppointmentSlice,
  (state: State, props: {view: string}): boolean => {
  const view = props && props.view ? props.view : '*';
  return state.views.hasOwnProperty(view) && state.views[view].status === EntityStatus.COMPLETED;
});
