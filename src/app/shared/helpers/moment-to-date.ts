/** Libreria Moment */
import * as moment from 'moment';
/**
 * Transform string date to Date
 * @param {string} date date
 * @param {string} dateFormat date format
 * @returns
 */
export const MomentToDate = (date: string, dateFormat: string): Date => {
  return moment(date, dateFormat).toDate();
}
