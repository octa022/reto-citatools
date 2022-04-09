import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicalAppointment } from '../models';

@Component({
  selector: 'app-mocal-confirmation',
  templateUrl: './mocal-confirmation.component.html',
  styleUrls: ['./mocal-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MocalConfirmationComponent {
  /**
   * Medical Appointment
   */
  @Input()
  cita!: MedicalAppointment
  /**
   * Component constructor
   * @param activeModal
   */
  constructor(
    public activeModal: NgbActiveModal
  ) { }
  /**
   * Save
   */
  save(): void {
    this.activeModal.close(true);
  }
}
