/**
 * Checks if a student was seated in a given position on a given date
 *  and returns the full data for that student.
 *  Used by DateDetails component.
 * @param {string} positionId - id of room position.
 * @param {object} date - date data.
 * @param {array} students - array of students.
 * @returns {object} student data or {null}
 */
export const getStudentByPositionId = (positionId, date, students) => {
  const dateStudent = date.students.find(student => student.positionId === positionId);
  if (dateStudent) {
    const student = students.find(student => student.id === dateStudent.studentId);
    return student;
  } else return null;
};

/**
 * Checks absent student data for a given date and returns full data for absent students.
 *  Used by DateDetails component.
 * @param {object} date - date data.
 * @param {array} students - array of student objects.
 * @returns {array} absent students
 */
export const getAbsentStudents = (date, students) => {
  const studentIds = date.students.filter(student => student.absent)
    .map(student => student.studentId);

  const absentStudents = students.filter(student => studentIds.includes(student.id));
  return absentStudents;
}

/**
 * Finds positionId of desk on a given date, finds studentId of student
 *   at that position, finds student with that studentId.
 *   Used by DeskHistory component.
 * @param {object} date - date data. 
 * @param {array} students - array of student objects.
 * @param {string} deskId
 * @returns {sting} student's name or 'n/a' 
 */
export const getStudentByDeskAndDate = (date, students, deskId) => {
  try {
    const positionId = date.desks.find(desk => desk.deskId === deskId).positionId;
    const studentId = date.students.find(student => student.positionId === positionId).studentId;
    const student = students.find(student => student.id === studentId);
    return `${student.bio.givenName} ${student.bio.familyName}`;
  } catch {
    return 'n/a';
  }
}