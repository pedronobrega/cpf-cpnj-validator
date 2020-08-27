import Cpf from '../services/Cpf';

it('Should Return True when CPF valid', () => {
  const validCpf = '654.988.862-09';
  const isValid = Cpf.isValid(validCpf);

  expect(isValid).toBeTruthy();
});

it('Should Return True when CPF is invalid', () => {
  const invalidCpf = '353.129.399-99';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF length is short', () => {
  const invalidCpf = '123';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF length is bigger', () => {
  const invalidCpf = '937312535500';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to one', () => {
  const invalidCpf = '11111111111';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to two', () => {
  const invalidCpf = '22222222222';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to three', () => {
  const invalidCpf = '33333333333';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to four', () => {
  const invalidCpf = '44444444444';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to five', () => {
  const invalidCpf = '55555555555';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to six', () => {
  const invalidCpf = '66666666666';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to seven', () => {
  const invalidCpf = '77777777777';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to eight', () => {
  const invalidCpf = '88888888888';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});

it('Should Return False when CPF have all numbers equals to nine', () => {
  const invalidCpf = '99999999999';
  const isValid = Cpf.isValid(invalidCpf);

  expect(isValid).toBeFalsy();
});
