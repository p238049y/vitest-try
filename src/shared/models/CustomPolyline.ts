export class CustomPolyline {
    id: string;
    polyline: google.maps.Polyline;
    colorCode: string;
    isOwnPolyline: boolean;
    createdId: number;

    constructor(
        id: string,
        polyline: google.maps.Polyline,
        colorCode: string,
        createdId: number,
        operatorUserId: number
    ) {
        this.id = id;
        this.polyline = polyline;
        this.colorCode = colorCode;
        this.isOwnPolyline = operatorUserId === createdId;
        this.createdId = createdId;
    }

    isEditable(hasAdminRole: boolean): boolean {
        if (hasAdminRole) {
            return true;
        } else {
            return this.isOwnPolyline;
        }
    }
}

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
