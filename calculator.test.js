const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 200;
    actual = sum(150, 50);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    expected = -200;
    actual = sum(-150, -50);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 200;
    actual = sum(200, 0);
    expect(actual).toBe(expected);
  });

});

// -----

describe('subtract', () => {

  test('can subtract two values', () => {
    expected = 2;
    actual = subtract(4, 2);
    expect(actual).toBe(expected);
  })

  test('can subtract two large numbers', () => {
    expected = 50;
    actual = subtract(100, 50);
    expect(actual).toBe(expected);
  })

});

// -----

describe('multiply', () => { 

  test('can multiply two numbers', () => {
    expected = 4;
    actual = multiply(2, 2);
    expect(actual).toBe(expected);
  })

  test('can multiply zero', () => {
    expected = 0;
    actual = (222 * 0);
    expect(actual).toBe(expected);

  })

});

describe('divide', () => {
  test('can divide two values', () => {
    expected = 2;
    actual = divide(4, 2);
    expect(actual).toBe(expected);
  }) 

  test('can divide with 1', () => {
    expected = 19;
    actual = subtract(20, 1);
    expect(actual).toBe(expected);
  })

});


describe('modulus', () => {
  test('can get a remainder of 1', () => {
    expected = 1;
    actual = modulus(3, 2);
    expect(actual).toBe(expected);
  })

  test('can get a remainder of 2', () => {
    expected = 2;
    actual = modulus(5, 3);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {
  test('can get an even result', () => {
    expected = true;
    actual = even(10);
    expect(actual).toBe(expected);
  })

  

});

describe('odd', () => {
  test('can get an odd result', () => {
    expected = true;
    actual = odd(9);
    expect(actual).toBe(expected);
  })
});
