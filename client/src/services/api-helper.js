import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

/**
 * Get all students data from API.
 * @function getStudents
 * @returns {array} - Array of students.
 */
export const getStudents = async () => {
  const resp = await axios.get(`${BASE_URL}/students`);
  return resp.data;
};

/**
 * Get all dates data from API.
 * @function getDates
 * @returns {array} - Array of dates.
 */
export const getDates = async () => {
  const resp = await axios.get(`${BASE_URL}/dates`);
  return resp.data;
};

/**
 * Get all desks data from API.
 * @function getDesks
 * @returns {array} - Array of desks.
 */
export const getDesks = async () => {
  const resp = await axios.get(`${BASE_URL}/desks`);
  return resp.data;
};

/**
 * Get all rooms data from API.
 * @function getRooms
 * @returns {array} - Array of rooms.
 */
export const getRooms = async () => {
  const resp = await axios.get(`${BASE_URL}/rooms`);
  return resp.data;
};