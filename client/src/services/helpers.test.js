import { getStudentByPositionId, getAbsentStudents, getStudentByDeskAndDate } from './helpers';
import { studentsProp, datesProp, } from '../testUtils/mock-props';

describe('helper functions', () => {
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
    });
  });

  describe('getStudentByDeskAndDate', () => {
    test('should return name of student who sat at desk', () => {
      const deskId = 'e8c75fe7-89ec-4178-a6e8-bddcb4afac96';
      const expectedResult = 'Leslie Mccarthy';
      const result = getStudentByDeskAndDate(datesProp[0], studentsProp, deskId);
      expect(result).toBe(expectedResult);
    });

    test('should return n/a if no student was seated at desk', () => {
      const deskId = '7fd34fbf-fee9-4754-8ac9-15183394c705';
      const expectedResult = 'n/a';
      const result = getStudentByDeskAndDate(datesProp[0], studentsProp, deskId);
      expect(result).toBe(expectedResult);
    });
  });
});