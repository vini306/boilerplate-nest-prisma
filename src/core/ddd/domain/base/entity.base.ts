import { DateValueObject } from '../value-objects/date.value-object';
import { ID } from '../value-objects/id.value-object';

export interface IBaseEntityProps {
  id: ID;
  createdAt: DateValueObject;
  updatedAt: DateValueObject;
}

export interface ICreateEntityProps<T> {
  id: ID;
  props: T;
  createdAt?: DateValueObject;
  updatedAt?: DateValueObject;
}
export abstract class EntityBase<IEntityProps> {
  constructor({
    id,
    createdAt,
    updatedAt,
    props,
  }: ICreateEntityProps<IEntityProps>) {
    this.setId(id);
    const now = DateValueObject.now();
    this._createdAt = createdAt || now;
    this._updatedAt = updatedAt || now;
    this.props = props;
  }

  protected readonly props: IEntityProps;

  protected abstract _id: ID;

  private readonly _createdAt: DateValueObject;

  private _updatedAt: DateValueObject;

  get id(): ID {
    return this._id;
  }

  private setId(id: ID): void {
    this._id = id;
  }

  get createdAt(): DateValueObject {
    return this._createdAt;
  }

  get updatedAt(): DateValueObject {
    return this._updatedAt;
  }

  static isEntity(entity: unknown): entity is EntityBase<unknown> {
    return entity instanceof EntityBase;
  }

  public equals(object?: EntityBase<IEntityProps>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!EntityBase.isEntity(object)) {
      return false;
    }

    return this.id ? this.id.equals(object.id) : false;
  }
}
