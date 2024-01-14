function add(x: number, y: number): number {
  return x + y;
}

describe('This is a test app', () => {
  it('should pass', () => {
    expect(add(2, 2)).toBe(4);
  });
});
