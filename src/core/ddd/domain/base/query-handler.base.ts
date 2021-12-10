import { Result } from '../utils/result.utils';

export abstract class QueryBase {}

export abstract class QueryHandlerBase {
  abstract handler(query: QueryBase): Promise<Result<unknown>>;
  execute(query: QueryBase): Promise<Result<unknown>> {
    return this.handler(query);
  }
}
