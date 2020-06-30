import { getRepository } from 'typeorm';

import Bug from '../models/Bug';

class DeleteBugService {
  public async execute(id: string): Promise<void> {
    const bugsRepository = getRepository(Bug);

    const bug = await bugsRepository.findOne(id);

    if (!bug) {
      throw new Error('Bug does not exist');
    }

    await bugsRepository.remove(bug);
  }
}

export default DeleteBugService;
