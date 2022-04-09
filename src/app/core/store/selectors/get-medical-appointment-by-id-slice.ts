import { createSelector } from '@ngrx/store';

import { State, ById } from '../medical-appointment/medical-appointment.state';

import { getMedicalAppointmentSlice } from "./get-medical-appointment-slice";

/**
 *  Selector for the Medical Appointment slice by Id
 */
export const getMedicalAppointmentByIdSlice = createSelector(getMedicalAppointmentSlice, (state:  State) => state.byId);
