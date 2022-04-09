import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedicalAppointment } from 'src/app/shared/models';
@Component({
  selector: 'app-modal-cita',
  templateUrl: './modal-cita.component.html',
  styleUrls: ['./modal-cita.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCitaComponent {
  /**
   * Form used in the component
   */
  form!: FormGroup;
  /**
   * Flag to indicate if form errors are shown
   */
  showErrors = false;
  /**
   * Medical Appointment Color
   */
  color: string = '#a7d99c';
  /**
   * is a new Medical Appointment ?
   */
  @Input()
  isnew = true;
  /**
   * Medical Appointment
   */
  @Input()
  set cita (cita: MedicalAppointment) {
    if (!cita) { return; }
    this.color = cita.color;
    this.form.patchValue(cita, {emitEvent: false});
  }
  /**
   *Component constructor
   * @param activeModal Reference to the currently opened (active) modal.
   * @param formBuilder
   */
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      color: ['#a7d99c'],
      duration: [20, [Validators.min(0), Validators.max(240), Validators.required]],
      description: [''],
      active: [false],
      createAt: [''],
      updateAt: ['']
    });
  }
  get getColor() { return this.form.get('color') as FormControl; }
  /**
   * Save
   */
  save(): void {
    if (this.form.invalid) {
      this.showErrors = true;
      return;
    }
    const form = this.form.value;
    form.color = this.color;
    this.activeModal.close(form);
  }
}
