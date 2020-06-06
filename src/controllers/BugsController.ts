import { Request, Response } from 'express';
import knex from '../database/connection';

class BugsController {
  async index(request: Request, response: Response) {
    const bugs = await knex('bugs').select('*');

    const serializedBugs = bugs.map(bug => {
      return {
        id: bug.id,
        title: bug.title,
        description: bug.description,
        reporter: bug.reporter,
        status: bug.status
      }
    });

    return response.json(serializedBugs)
  }

  async create(request: Request, response: Response){
    const {
      title,
      description,
      reporter,
      status
    } = request.body;

    const bug = {
      title,
      description,
      reporter,
      status
    }
  
    const insertedBug = await knex('bugs').insert(bug);

    return response.json({
      id: insertedBug[0],
      ...bug
    });
  }
}

export default BugsController;