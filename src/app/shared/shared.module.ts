import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MocalConfirmationComponent } from './mocal-confirmation/mocal-confirmation.component';
import { SimpleSearchPipe } from './pipe/simple-search.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MocalConfirmationComponent,
    SimpleSearchPipe
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MocalConfirmationComponent,
    SimpleSearchPipe
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbDropdownModule
  ]
})
export class SharedModule { }
