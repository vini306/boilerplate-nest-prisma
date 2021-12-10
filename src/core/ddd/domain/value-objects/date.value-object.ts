import { ArgumentInvalidException } from '../../../exception/argument-invalid.exception';
import { IDomaimPrimitive, ValueObject } from '../base/value-object.base';

export class DateValueObject extends ValueObject<Date> {
  constructor(currentValue: Date | number | string) {
    const newDate = new Date(currentValue);
    super({ value: newDate });
  }

  protected validate({ value }: IDomaimPrimitive<Date>): void {
    if (!(value instanceof Date) || Number.isNaN(value.getTime())) {
      throw new ArgumentInvalidException('Incorret Date');
    }
  }

  public static now(): DateValueObject {
    return new DateValueObject(Date.now());
  }

  public get value(): Date {
    return this.props.value;
  }
}
