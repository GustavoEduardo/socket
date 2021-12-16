export interface errorReturn{
    status:string,
    message:string,
    code: number
}

export interface successReturn{
    status:string,
    message:string,
    code: number,
    data?: Object 
}