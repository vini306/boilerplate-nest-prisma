import { ArgumentInvalidException } from '../../../exception/argument-invalid.exception';
import { v4 as uuidv4, validate } from 'uuid';
import { IDomaimPrimitive } from '../base/value-object.base';
import { ID } from './id.value-object';

export class UUID extends ID {
  static generate(): UUID {
    return new UUID(uuidv4());
  }

  protected validate({ value }: IDomaimPrimitive<string>): void {
    if (!validate(value)) {
      throw new ArgumentInvalidException('Incorrect UUID format');
    }
  }
}
