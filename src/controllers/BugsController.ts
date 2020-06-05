import { Request, Response } from 'express';

class BugsController {
  index(request: Request, response: Response) {

    const message = { message: 'hello bugs' };
    return response.json(message)
  }
}

export default BugsController;