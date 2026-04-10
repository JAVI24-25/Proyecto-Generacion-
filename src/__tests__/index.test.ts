import { sumar } from '../index';

describe('Pruebas del proyecto', () => {
  test('sumar debe calcular correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
    expect(sumar(-1, 1)).toBe(0);
    expect(sumar(0, 0)).toBe(0);
  });
});
