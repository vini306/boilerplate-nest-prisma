import { nanoid } from 'nanoid';

export type ICommandProps<T> = Omit<T, 'correlantionId'> & Partial<CommandBase>;

export class CommandBase {
  public readonly correlationId: string;

  constructor(props: ICommandProps<unknown>) {
    //Validation with Guard props
    this.correlationId = props.correlationId || nanoid(8);
  }
}
