class ErrorHandler extends Error {
  statusCode: number
  message: string
  constructor(statusCode: number, message: string) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
    Object.setPrototypeOf(this, ErrorHandler.prototype)
    this.message = message
    this.name = "ErrorHandler"
    this.stack = new Error().stack
  }
  static badRequest(message: string) {
    return new ErrorHandler(400, message)
  }
  static internal(message: string) {
    return new ErrorHandler(500, message)
  }
  static forbidden(message: string) {
    return new ErrorHandler(403, message)
  }
  static notFound(message: string) {
    return new ErrorHandler(404, message)
  }
  static unauthorized(message: string) {
    return new ErrorHandler(401, message)
  }
  static conflict(message: string) {
    return new ErrorHandler(409, message)
  }
  static tooManyRequests(message: string) {
    return new ErrorHandler(429, message)
  }
  static badGateway(message: string) {
    return new ErrorHandler(502, message)
  }
  static serviceUnavailable(message: string) {
    return new ErrorHandler(503, message)
  }
}
