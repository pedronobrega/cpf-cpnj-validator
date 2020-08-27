export default {
  getNumbersFromString(data: string): string {
    return data !== undefined ? data.replace(/[^0-9]/g, '') : '';
  },
};
