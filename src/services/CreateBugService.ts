import { getRepository } from 'typeorm';

import Bug from '../models/Bug';

interface Request {
  title: string;
  description: string;
  reporter: string;
  status: 'open' | 'in progress' | 'close';
}
class CreateBugService {
  public async execute({
    title,
    description,
    reporter,
    status,
  }: Request): Promise<Bug> {
    const bugsRepository = getRepository(Bug);

    const bug = bugsRepository.create({
      title,
      description,
      reporter,
      status,
    });

    await bugsRepository.save(bug);

    return bug;
  }
}

export default CreateBugService;
