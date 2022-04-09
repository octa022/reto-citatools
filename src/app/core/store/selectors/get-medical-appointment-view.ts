import { createSelector } from '@ngrx/store';
import { map, orderBy } from 'lodash';
import { MomentToDate } from 'src/app/shared/helpers/moment-to-date';

import { MedicalAppointment } from 'src/app/shared/models';
import { State } from '../medical-appointment/medical-appointment.state';
import { getMedicalAppointmentSlice } from './get-medical-appointment-slice';
/**
 * Selector that returns the list of Medical Appointments
 */
export const getMedicalAppointment = createSelector(getMedicalAppointmentSlice,
  (state: State, props: {view: string}): MedicalAppointment[] => {
  const view = !props || !props.view ? '*' : props.view;
  if (!state.views[view]) {
    return [];
  }
  const list = state.views[props.view].ids;
  const items = map(list, (id) => {
    return state.byId[id].data;
  });
  const sorter = orderBy(items, item => MomentToDate(item.createAt, 'DD/MM/YYYY HH:mm:ss'), 'desc');
  return sorter;
});
