export interface IFunctionResultModel<DataType, ErrorType = Error> {
  value: DataType;
  error: ErrorType | null;
}
