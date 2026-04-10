console.log('Proyecto con CI/CD configurado correctamente');

export const sumar = (a: number, b: number): number => {
  return a + b;
};

if (require.main === module) {
  console.log('2 + 3 =', sumar(2, 3));
}
