import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//
import { CitasRoutingModule } from './citas-routing.module';
import { CitasComponent } from './citas.component';
import { TipoCitaComponent } from './tipo-cita/tipo-cita.component';
import { ModalCitaComponent } from './modal-cita/modal-cita.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CitasComponent,
    TipoCitaComponent,
    ModalCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    NgbTooltipModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgbPaginationModule
  ]
})
export class CitasModule { }
