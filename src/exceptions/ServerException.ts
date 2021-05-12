import HttpException from "./HttpException";
 
class ServerException extends HttpException {
  constructor(message?: string) {
    super(400, message);
  }
}

export default ServerException;