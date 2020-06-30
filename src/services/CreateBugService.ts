import { getCustomRepository, getRepository } from 'typeorm';
import BugsRepository from '../repositories/BugsRepository';

import Bug from '../models/Bug';

interface Request {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class CreateBugService {
  public async execute(): Promise<Bug> {}
}

export default CreateBugService;
