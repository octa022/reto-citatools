import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import {
  MedicalAppointment
} from 'src/app/shared/models';

@Component({
  selector: 'app-tipo-cita',
  templateUrl: './tipo-cita.component.html',
  styleUrls: ['./tipo-cita.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TipoCitaComponent {
  /**
   * Grid Presentation Mode
   */
  @Input()
  grid: boolean = false;
  /**
   * Medical Appointment
   */
  @Input()
  medical!: MedicalAppointment;
  /**
   * Edit Medical Appointment
   */
  @Output()
  edit: EventEmitter<MedicalAppointment> = new EventEmitter<MedicalAppointment>();
  /**
   * Delete Medical Appointment
   */
  @Output()
  delete: EventEmitter<MedicalAppointment> = new EventEmitter<MedicalAppointment>();
  /**
   * Component constructor
   */
  constructor() { }
  /**
   * Event: Edit Medical Appointment
   */
  editMedicalAppointment() {
    if (!this.medical) { return;}
    this.edit.emit(this.medical);
  }
  /**
   * Event: Delete Medical Appointment
   */
  deleteMedicalAppointment() {
    if (!this.medical) { return;}
    this.delete.emit(this.medical);
  }
}
