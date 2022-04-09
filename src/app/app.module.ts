import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { CitasModule } from './citas/citas.module';
import { getReducers, REDUCER_TOKEN } from './core/store';
import { metaReducers } from './core/store/meta-reducers';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(REDUCER_TOKEN, {metaReducers}),
    NgbModule,
    SharedModule,
    CitasModule
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      deps: [],
      useFactory: getReducers,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
