export type IPrimitives = string | number | boolean;

export interface IDomaimPrimitive<T extends IPrimitives | Date> {
  value: T;
}

type IValueObjectProps<T> = T extends IPrimitives | Date
  ? IDomaimPrimitive<T>
  : T;

export abstract class ValueObject<T> {
  protected readonly props: IValueObjectProps<T>;

  constructor(props: IValueObjectProps<T>) {
    this.validate(props);
    this.props = props;
  }

  protected abstract validate(props: IValueObjectProps<T>): void;

  static isValueObject(obj: unknown): obj is ValueObject<unknown> {
    return obj instanceof ValueObject;
  }

  public equals(valueObject?: ValueObject<T>): boolean {
    if (valueObject === null || valueObject === undefined) {
      return false;
    }
    return JSON.stringify(this) === JSON.stringify(valueObject);
  }

  public getRaw(): T {
    if (this.isDomainPrimitive(this.props)) {
      return this.props.value;
    }
  }

  private isDomainPrimitive(
    obj: unknown,
  ): obj is IDomaimPrimitive<T & (IPrimitives | Date)> {
    if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
      return true;
    }
    return false;
  }
  private checkIfEmpty() {
    //use guard
  }
}
