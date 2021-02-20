import AbstractApiRepository from '../../../base/repositories/AbstractApiRepository';
import { News } from '../models/News';

export default class NewsApiRepository extends AbstractApiRepository {
  getAll = () => {
    return this.get<News[]>({ url: `/posts` });
  };

  getOne = (id: number) => {
    return this.get<News>({ url: `/posts/${id}` });
  };
}
