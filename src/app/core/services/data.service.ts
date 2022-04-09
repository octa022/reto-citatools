import {
  Injectable
} from '@angular/core';

import {
  Store,
  select,
} from '@ngrx/store';

import {
  map as lodahMap,
  random,
  range,
} from 'lodash';

/** Libreria Moment */
import * as moment from 'moment';

import {
  BehaviorSubject,
  merge,
  Observable
} from 'rxjs';

import {
  tap,
  map,
  switchMap,
  filter,
  ignoreElements
} from 'rxjs/operators';

import {
  UUID
} from 'angular2-uuid';

import {
  MedicalAppointment,
  TypeMedicalAppointment
} from 'src/app/shared/models';

import {
  typeMedicalAppointment
} from '../data/type-medical-appointment';

import {
  CreateMedicalAppointment,
  DeleteMedicalAppointment,
  GetMedicalAppointments,
  UpdateMedicalAppointment
} from '../store/actions/medical-appointment.action';

import {
  getMedicalAppointment,
  isMedicalAppointmentSlice
} from '../store/selectors';

/**
 * Default date format
 */
const DEFAULT_DATE_FORMAT: string = 'DD/MM/YYYY HH:mm:ss';

/**
 * Service to get the data
 */
@Injectable({
  providedIn: 'root'
})

export class DataService {
  /**
   * Stream para Longitud de la lista
   */
  private _dataLent$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  readonly dataLent$ = this._dataLent$.asObservable();
  /**
   * Constructor del servicio
   */
  constructor(
    private store: Store<any>,
  ) { }
  /**
   * Stream: Get Medical appointments
   * @returns {Observable<MedicalAppointment[]>}
   */
  getMedicalAppointment$(): Observable<MedicalAppointment[]> {
    /** Stream para buscar datos en el backend */
    const backend$ = this.store
      .pipe(
        select(isMedicalAppointmentSlice, {view: '*'}),
        filter((isAvailable) => !isAvailable),
        map(() => this.getMedicalAppointment()),
        tap(items => this.store.dispatch(new GetMedicalAppointments(items, '*') )),
        ignoreElements()
      )
    /** stream para buscar los datos en el store */
    const store$ = this.store
      .pipe(
        select(isMedicalAppointmentSlice, {view: '*'}),
        filter((isAvailable) => isAvailable),
        switchMap(() => this.store.pipe(select(getMedicalAppointment, {view: '*'}))),
        tap(items => this._dataLent$.next(items.length)),
      );
    return merge(backend$, store$);
  }
  /**
   * Stream: Create Medical appointments
   * @param {MedicalAppointment} medical Medical appointments
   * @returns
   */
  createMedicalAppointment$(medical: MedicalAppointment) {
    const today = moment().format(DEFAULT_DATE_FORMAT);
    medical.createAt = today;
    medical.updateAt = today;
    medical.id = UUID.UUID();
    return this.store.dispatch(new CreateMedicalAppointment(medical));
  }
  /**
   * Stream: Update Medical appointments
   * @param {MedicalAppointment} medical Medical appointments
   * @returns
   */
  updateMedicalAppointment$(medical: MedicalAppointment) {
    const today = moment().format(DEFAULT_DATE_FORMAT);
    medical.updateAt = today;
    return this.store.dispatch(new UpdateMedicalAppointment(medical));
  }
  /**
   * Stream: Delete Medical appointments
   * @param {string} id Medical appointments ID
   * @returns
   */
  deleteMedicalAppointment$(id: string) {
    return this.store.dispatch(new DeleteMedicalAppointment(id));
  }
  /**
   * Get Medical appointments
   */
  private getMedicalAppointment(size: number = 5): MedicalAppointment[] {
    const list = range(size);
    /** TODAY's date */
    const today = new Date();
    /** Medical appointments */
    const data: MedicalAppointment[] = lodahMap(list, id => {
      const type: TypeMedicalAppointment = this.ramdomType();
      return {
        id: UUID.UUID(),
        name: type.name,
        duration: type.duration,
        color: type.color,
        description: type.description,
        active: !Math.round(Math.random()),
        createAt: this.randomDate(new Date(2022, 0, 1), today),
        updateAt: this.randomStartDate(),
      }
    })
    return data;
  }
  /**
   * Get random date
   * @param start Start date
   * @param end End date
   * @returns Random Date
   */
  private randomDate(start: Date, end: Date) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return moment(date).format(DEFAULT_DATE_FORMAT)
  }
  /**
   * Get random Start date
   */
  private randomStartDate(){
    const days = random(0, 7);
    return moment().subtract(days, 'd').format(DEFAULT_DATE_FORMAT);
  }
  /**
   * Get Random Type of Medical Appointment
   * @returns
   */
  private ramdomType() {
    const type = typeMedicalAppointment;
    return type[Math.floor(Math.random() * type.length)]
  }
}
