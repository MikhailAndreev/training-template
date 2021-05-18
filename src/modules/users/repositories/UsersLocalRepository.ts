import AbstractLocalRepository from '../../../base/repositories/AbstractLocalRepository';

export default class NewsLocalRepository extends AbstractLocalRepository {
  tableName(): string {
    return 'news';
  }

  // extraSaveNewsWithSomeExtraParams(data: [])
}
