import {
  MedicalAppointment
} from "src/app/shared/models";

import {
  EntityState
} from "../models/entity-view.model";

/**
 * State
 */
export interface State {
  /** Map indexed by id */
  byId: ById;
  /** Views for Medical Appointments */
  views: Views;
}
/**
 * Interface for state of entities in a map ordered by ID
 */
export interface ById {
  [index: string]: {refreshed: string, data: MedicalAppointment};
}
/**
 * State para el slice "views"
 */
export interface Views {
  [index: string]: EntityState;
}
