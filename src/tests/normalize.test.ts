import Normalize from '../services/Normalize';

it('Should Get Numbers from String', () => {
  const stringToBeNormalized = '!@#Wo123asldkad!)#$%$%^%';
  const stringNormalized = Normalize.getNumbersFromString(stringToBeNormalized);

  expect(stringNormalized).toBe('123');
});

it('Should Return String when Undefined', () => {
  const stringToBeNormalized = undefined;
  const stringNormalized = Normalize.getNumbersFromString(stringToBeNormalized);

  expect(stringNormalized).toBe('');
});
