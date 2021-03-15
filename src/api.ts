export type SWApiShape<T extends any> = {
  next: string;
  results: T[];
};
