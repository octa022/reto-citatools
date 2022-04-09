import {
  random
} from 'lodash';

import {
  TypeMedicalAppointment
} from "src/app/shared/models";

/**
 * Types of Medical Appointmen
 */
export const typeMedicalAppointment: TypeMedicalAppointment[] = [
  {
    id: '1',
    name: 'Medicina General',
    color: '#34FFA04',
    duration: random(10, 60),
    description: 'Primer nivel de atención médica'
  },
  {
    id: '2',
    name: 'Emergencia',
    color: '#FF2D00',
    duration: random(10, 60),
    description: 'Situación crítica de peligro evidente para la vida del paciente y que requiere una actuación inmediata.'
  },
  {
    id: '3',
    name: 'Primera vez',
    color: '#FAEF04',
    duration: random(10, 60),
    description:'No sabemos que tiene, vamos a ver que pasa'
  },
  {
    id: '4',
    name: 'Pediatría',
    color: '#04E8FA',
    duration: random(10, 60),
    description: 'Estudio del crecimiento y el desarrollo de los niños hasta la adolescencia'
  },
  {
    id: '5',
    name: 'Odontología',
    color: '#FAC304',
    duration: random(10, 60),
    description: 'Revisamos los dientes'
  },
  {
    id: '6',
    name: 'Control',
    color: '#2D04FA',
    duration: random(10, 60),
    description: 'Reconocimiento médico, efectuado por un médico especialista'
  },
];
