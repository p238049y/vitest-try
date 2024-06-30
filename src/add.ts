export function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0);
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it('add: case1', () => {
    expect(add()).toBe(0);
  });
  it('add: case2', () => {
    expect(add(1)).toBe(1);
  });
  it('add: case3', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
}
