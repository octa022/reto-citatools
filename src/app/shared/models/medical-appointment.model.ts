import { TypeMedicalAppointment } from "./type-medical-appoinment.model";

/**
 * Medical appointment interface
 */
export interface MedicalAppointment extends TypeMedicalAppointment {
  /** Flag that allows enabling or disabling an appointment type */
  active: boolean;
  /** Creation date */
  createAt: string;
  /** Edition date */
  updateAt: string;
}
