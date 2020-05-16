const CodeBreaker = require('./codebreaker');
const cb = new CodeBreaker('0123');

describe('Codebreaker', () => {
  test('test 0123 to equal 0123', () => {
    expect(cb.guest('0123')).toBe('XXXX');
  });
  test('test 0123 to equal 6789', () => {
    expect(cb.guest('6789')).toBe('');
  });
  test('test 0123 to equal 1032', () => {
    expect(cb.guest('1032')).toBe('____');
  });
  test('test 0123 to equal 0217', () => {
    expect(cb.guest('0217')).toBe('X__');
  });
  test('test 0123 to equal 0513', () => {
    expect(cb.guest('0513')).toBe('XX_');
  });
});

describe('Testing Existence', () => {
  test('if value 1 exist back true', () => {
    expect(cb.itExist(1)).toBe(true); //Assert
  });
  test('if value 8 dont exist back false', () => {
    expect(cb.itExist(8)).toBe(false); //Assert
  });
});
describe('Testing Position', () => {
  test('if value 0 is positioned in 0 back true', () => {
    expect(cb.isPositioned(0, 0)).toBe(true); //Assert
  });
  test('if value 1 is positioned in 1 back true', () => {
    expect(cb.isPositioned(1, 1)).toBe(true); //Assert
  });
  test('if value 8 is not positioned in 2 back false', () => {
    expect(cb.isPositioned(8, 2)).toBe(false); //Assert
  });
});
describe('Testing SetSecret', () => {
  test('if change secret value', () => {
    const newSecret = 5678;
    cb.setSecret(newSecret);
    expect(cb.secret).toBe(newSecret); //Assert
  });
});
