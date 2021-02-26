export interface IAction<TYPE, PAYLOAD> {
  type: TYPE;
  payload: PAYLOAD;
}
export type IActionCreator = <TYPE, PAYLOAD>(t: TYPE, p: PAYLOAD) => IAction<TYPE, PAYLOAD>
export const actionCreator: IActionCreator = (t, p) => ({
  type: t,
  payload: p,
})

export interface IEmptyAction<TYPE> {
  type: TYPE;
}
export type IEmptyActionCreator = <TYPE>(t: TYPE) => IEmptyAction<TYPE>
export const emptyActionCreator: IEmptyActionCreator = (type) => ({
  type,
})
