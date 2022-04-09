import { createSelector } from '@ngrx/store';
import { MedicalAppointment } from 'src/app/shared/models';
import { getMedicalAppointmentSlice } from './get-medical-appointment-slice';

/**
 * Get Medical Appointment by id
 */
export const getMedicalAppointmenyId = createSelector(getMedicalAppointmentSlice,
  (state: any, props: {itemId: string}): MedicalAppointment | null => {
    if (!state.hasOwnProperty(props.itemId)) { return null; }
    return state[props.itemId].data;
  }
);
