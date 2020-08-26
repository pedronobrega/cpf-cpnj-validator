import { strict } from 'assert';

export default {
  getNumbersFromString(data: string): string {
    return data.replace(/[^0-9]/g, '');
  },
};
