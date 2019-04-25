const add = (a, b) => a + b;
const generateGreeting = name => (name ? `Hello ${name}` : 'Hello!');

describe('add', () => {
  test('it should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('it adds a negative number to a positive', () => {
    expect(add(-1, 1)).toBe(0);
  });
});

describe('generateGreeting', () => {
  test('it should greet Mike', () => {
    expect(generateGreeting('Mike')).toBe('Hello Mike');
  });
  test('it should greet Rex', () => {
    expect(generateGreeting('Rex')).toBe('Hello Rex');
  });
  test('Not putting a name should just say hello!', () => {
    expect(generateGreeting()).toBe('Hello!');
  });
});
