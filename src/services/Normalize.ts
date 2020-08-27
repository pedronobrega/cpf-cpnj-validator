export default {
  getNumbersFromString(data: unknown): string {
    if (typeof data === 'string') {
      return data.replace(/[^0-9]/g, '');
    }
    return '';
  },
};
