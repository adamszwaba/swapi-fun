export type ResourceUrl = string;

export type CompareResult = -1 | 0 | 1;

export abstract class Comparable<T> {
  value: T;

  constructor(val: T) {
    this.value = val;
  }

  get(): T {
    return this.value;
  }

  abstract compare(to: Comparable<T>): CompareResult;
}
