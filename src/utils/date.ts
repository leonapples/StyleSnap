/**
 * Get the current local device date.
 *
 * @returns {string} the current date in the format YYYY-MM-DD
 */
const getDate = (): string => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are counted starting from 0
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default getDate;
