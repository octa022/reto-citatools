import {
  Action
} from '@ngrx/store';

import {
  MedicalAppointment
} from 'src/app/shared/models';

import {
  CREATE_MEDICAL_APPOINTMENT_COMPLETED,
  DELETE_MEDICAL_APPOINTMENT_COMPLETED,
  GET_MEDICAL_APPOINTMENT_COMPLETED,
  UPDATE_MEDICAL_APPOINTMENT_COMPLETED
} from './action-types';

/**
 * Action requesting the list of Medical Appointments
 */
export class GetMedicalAppointments implements Action {
  /** Tipo de acción */
  readonly type = GET_MEDICAL_APPOINTMENT_COMPLETED;
  /** Datos para la acción */
  payload: {items: MedicalAppointment[], timestamp: string, view: string};
  /**
   * Constructor de la acción
   * @param {string} view dónde se quiere guardar Citas Medicas
   */
  constructor(items: MedicalAppointment[], view: string = '*') {
    this.payload = {items: items, view: view, timestamp: (new Date()).toISOString()};
  }
}
/**
 * Action completed create a Medical Appointment
 */
export class CreateMedicalAppointment implements Action {
  /** Tipo de acción */
  readonly type = CREATE_MEDICAL_APPOINTMENT_COMPLETED;
  /** Datos para la acción */
  payload: {medical: MedicalAppointment, timestamp: string};
  /**
   * Constructor de la acción
   * @param {MedicalAppointment} medical que se quiere actualizar
  */
  constructor(medical: MedicalAppointment) {
    this.payload = {medical: medical, timestamp: (new Date()).toISOString()};
  }
}
/**
 * Action completed update a Medical Appointment
 */
export class UpdateMedicalAppointment implements Action {
  /** Tipo de acción */
  readonly type = UPDATE_MEDICAL_APPOINTMENT_COMPLETED;
  /** Datos para la acción */
  payload: {medical: MedicalAppointment, timestamp: string};
  /**
   * Constructor de la acción
   * @param {MedicalAppointment} medical que se quiere actualizar
  */
  constructor(medical: MedicalAppointment) {
    this.payload = {medical: medical, timestamp: (new Date()).toISOString()};
  }
}
/**
 * Action completed delete a Medical Appointment
 */
export class DeleteMedicalAppointment implements Action {
  /** Tipo de acción */
  readonly type = DELETE_MEDICAL_APPOINTMENT_COMPLETED;
  /** Datos para la acción */
  payload: {itemId:  string, timestamp: string};
  /**
   * Constructor de la acción
   * @param {string} itemId Id del objeto que se quiere eliminar
  */
  constructor(itemId: string) {
    this.payload = {itemId: itemId, timestamp: (new Date()).toISOString()};
  }
}
