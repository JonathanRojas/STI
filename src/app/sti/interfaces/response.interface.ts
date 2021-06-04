export interface Error {
    ErrorList: string,
    ExceptionMessage: string,
    Message: string
}

export interface Response {
    Data: any,
    DataType: string,
    Error: Error,
    Result: number
}