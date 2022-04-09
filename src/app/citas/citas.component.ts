import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../core/services/data.service';
import { MedicalAppointment } from '../shared/models';
import { ModalCitaComponent } from './modal-cita/modal-cita.component';
import { MocalConfirmationComponent } from '../shared/mocal-confirmation/mocal-confirmation.component';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitasComponent {
  grid    : boolean = false; // false - list / true - grid
  page    : number = 1;
  pageSize: number = 8;
  /**
   * Stream: List of Medical Appointments
   */
  list$: Observable<MedicalAppointment[]>;
  /**
   * Component constructor
   * @param dataSrv Data Services
   * @param modalService Service for opening modal windows.
   */
  constructor(
    private dataSrv: DataService,
    private modalService: NgbModal
  ) {
    this.list$ = this.dataSrv.getMedicalAppointment$();
    const pageWidth  = document.documentElement.scrollWidth;
    if (pageWidth >= 1200) {
      this.pageSize = 9
    }
  }
  /**
   * Changes
   */
  modeChange() {
    this.grid = !this.grid
  }
  /**
   * Modal: Create Medical Appointment
   */
  modalCita(): void {
    const modalRef = this.modalService.open(ModalCitaComponent,
      { size: 'lg', centered: true, backdrop: 'static' , scrollable: true}
    );
    modalRef.componentInstance.isnew = true;
    modalRef.result
      .then(
        /** Enviamos la operación */
        (cita) => this.dataSrv.createMedicalAppointment$(cita),
        /** El usuario canceló el diálogo */
        (error) => console.log('error', error)
      );
  }
  /**
   * Modal: Edit Medical Appointment
   * @param {MedicalAppointment} cita Cita que se quiere editar
   */
  editModal(cita: MedicalAppointment) {
    const modalRef = this.modalService.open(ModalCitaComponent,
      { size: 'lg', centered: true, backdrop: 'static' , scrollable: true}
    );
    modalRef.componentInstance.isnew = false;
    modalRef.componentInstance.cita = cita;
    modalRef.result
      .then(
        /** Enviamos la operación */
        (cita) => this.dataSrv.updateMedicalAppointment$(cita),
        /** El usuario canceló el diálogo */
        (error) => console.log('error', error)
      );
  }
  /**
   * Modal: Delete Medical Appointment
   */
  deleteModal(cita: MedicalAppointment): void {
    const modalRef = this.modalService.open(MocalConfirmationComponent,
      { size: 'sm', centered: true, backdrop: 'static' , scrollable: true}
    );
    modalRef.componentInstance.cita = cita;
    modalRef.result
      .then(
        /** Enviamos la operación */
        () => this.dataSrv.deleteMedicalAppointment$(cita.id),
        /** El usuario canceló el diálogo */
        (error) => console.log('error', error)
      );
  }
}
