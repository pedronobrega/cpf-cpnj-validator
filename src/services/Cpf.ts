import Normalize from './Normalize';

export default {
  isValid(cpf: string): boolean {
    let isValid = true;
    const numbersInCpf: string = Normalize.getNumbersFromString(cpf);

    if (
      numbersInCpf.length !== 11 ||
      numbersInCpf === '11111111111' ||
      numbersInCpf === '22222222222' ||
      numbersInCpf === '33333333333' ||
      numbersInCpf === '44444444444' ||
      numbersInCpf === '55555555555' ||
      numbersInCpf === '66666666666' ||
      numbersInCpf === '77777777777' ||
      numbersInCpf === '88888888888' ||
      numbersInCpf === '99999999999'
    ) {
      isValid = false;
    } else {
      const numberArray = Array.from(numbersInCpf);

      let sum = 0;
      for (let i = 0; i < 9; i += 1) {
        sum += +numberArray[i] * (10 - i);
      }

      let mod = sum % 11 < 2 ? 0 : 11 - (sum % 11);

      if (mod !== +numberArray[9]) {
        isValid = false;
      } else {
        sum = 0;
        for (let i = 0; i < 10; i += 1) {
          sum += +numberArray[i] * (11 - i);
        }

        mod = sum % 11 < 2 ? 0 : 11 - (sum % 11);

        if ((sum * 10) % 11 !== +numberArray[10]) {
          isValid = false;
        }
      }
    }

    return isValid;
  },
};
