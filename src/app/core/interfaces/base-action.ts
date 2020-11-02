// tslint:disable-next-line:no-any
export interface BaseAction<T = any> {
  params: T;
  result: T;
  error: Error;
}
