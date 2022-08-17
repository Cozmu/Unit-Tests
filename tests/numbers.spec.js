/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/
// fail('Teste vazio!');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números', () => {
    expect(numbers([1, 2, 3, 4, 5])).toBeTruthy();
  })
  it('Verifica se a função `numbers` retorna `false` quando o array contém algum valor  numerico que não seja do tipo `number`', () => {
    expect(numbers([1, 2, '3', 4, 5])).toBeFalsy();
  })
  it('Verifica se a função `numbers` retorna `false` quando o array contém algum valor que não seja do tipo `number`', () => {
    expect(numbers([1, 'a', 3])).toBeFalsy();
  })  
  it('Verifica se a função `numbers` retorna `false` quando o array não contem nenhum valor do tipo `number`', () => {
    expect(numbers([' '] )).toBeFalsy();
  });
});
