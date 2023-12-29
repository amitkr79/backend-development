
class ApiError extends Error {
    constructor(
        statusCode,
        message= "Somethin went wrong",
        errors= [],
        statck = ""
    ){
        super(message)  // we use sper( to overide things)
        this.statusCode = statusCode
        this.data =  null
        this.message= message
        this.success = false;
        this.errors = errors

        if(stack) {
            this.stack = stack
        }else {
            Error.captureStackTrace(this,this,constructor)
        }
    }
}

export {ApiError}