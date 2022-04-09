import { createFeatureSelector } from '@ngrx/store';
import { State } from '../medical-appointment/medical-appointment.state';

/**
 * Selector for the Medical Appointment slice
 */
export const getMedicalAppointmentSlice = createFeatureSelector<State>('medicalAppointment');
