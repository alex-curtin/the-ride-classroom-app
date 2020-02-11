import { getStudentByPositionId, getAbsentStudents } from './helpers';
import { studentsProp, datesProp } from '../testUtils.js';


describe('getStudentByPositionId', () => {
  const students = studentsProp;
  const date = datesProp[0];
  let positionId;

  test('should return `student` if there is a student position', () => {
    positionId = "e2cd3e2b-a020-4b22-85b8-3ef195fe6e90";
    const expectedResult = students[1];
    const result = getStudentByPositionId(positionId, date, students);
    expect(result).toEqual(expectedResult);
  });

  test('should return null if there is not student in position', () => {
    positionId = "66835c79-3eb0-4abc-b2fc-5ef2e72f13bb";
    const result = getStudentByPositionId(positionId, date, students);
    expect(result).toBe(null);
  });
});

describe('getAbsentStudents', () => {
  const students = studentsProp;
  const date = datesProp[0];
  test('should return array of absent students', () => {
    const expectedResult = [students[2]];
    const result = getAbsentStudents(date, students);
    expect(result).toEqual(expectedResult);
  })
})