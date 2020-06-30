import { Repository } from 'typeorm';

import Bug from '../models/Bug';

class BugsRepository extends Repository<Bug> {}

export default BugsRepository;
