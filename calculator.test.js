const cal = require('./calculator');

describe('test add operation', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(cal.add(1, 2)).toBe(3); //Assert
  });
  test('adds 10 + 20 to equal 30', () => {
    expect(cal.add(10, 20)).toBe(30); //Assert
  });
});

describe('testing substraction', () => {
  test('substract 5 - 5 to equal 0', () => {
    expect(cal.substract(5, 5)).toBe(0); //Assert
  });
  test('substract 3 - 2 to equal 1', () => {
    expect(cal.substract(3, 2)).toBe(1); //Assert
  });
});
