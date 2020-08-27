import Normalize from './Normalize';

export default {
  isValid(cnpj: string): boolean {
    let isValid = true;
    const numbersInCnpj: string = Normalize.getNumbersFromString(cnpj);

    if (numbersInCnpj.length !== 14) {
      isValid = false;
    } else {
      const numberArray = Array.from(numbersInCnpj);

      let sum = 0;
      for (let i = 0; i < 12; i += 1) {
        const multiplier = i < 4 ? 5 - i : 13 - i;
        sum += +numberArray[i] * multiplier;
      }

      let mod = sum % 11 < 2 ? 0 : 11 - (sum % 11);
      if (mod !== +numberArray[12]) {
        isValid = false;
      } else {
        sum = 0;
        for (let i = 0; i < 13; i += 1) {
          const multiplier = i < 5 ? 6 - i : 14 - i;
          sum += +numberArray[i] * multiplier;
        }

        mod = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        if (mod !== +numberArray[13]) {
          isValid = false;
        }
      }
    }

    return isValid;
  },
};
