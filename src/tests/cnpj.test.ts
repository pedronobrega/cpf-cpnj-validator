import Cnpj from '../services/Cnpj';

it('Should Return True when CNPJ valid', () => {
  const validCnpj = '86.637.575/0001-35';
  const isValid = Cnpj.isValid(validCnpj);

  expect(isValid).toBeTruthy();
});

it('Should Return True when CNPJ is invalid', () => {
  const invalidCnpj = '96.632.535/9901-85';
  const isValid = Cnpj.isValid(invalidCnpj);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CNPJ length is short', () => {
  const invalidCnpj = '123';
  const isValid = Cnpj.isValid(invalidCnpj);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CNPJ length is bigger', () => {
  const invalidCnpj = '861637575000135';
  const isValid = Cnpj.isValid(invalidCnpj);

  expect(isValid).toBeFalsy();
});
