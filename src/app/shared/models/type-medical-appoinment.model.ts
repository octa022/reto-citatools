/**
 * Type of Medical appointment interface
 */
export interface TypeMedicalAppointment {
  id: string;
  /** Appointment type name */
  name: string;
  /** Almacena el codigo de color de un tipo de cita */
  color: string;
  /** Default duration of an appointment type */
  duration: number;
  /** Appointment type long description */
  description?: string;
}
