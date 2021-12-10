import { CommandBase } from './command.base';
import { Result } from '../utils/result.utils';
export abstract class CommandHandlerBase<
  CommandHandlerReturnType = unknown,
  CommandHandlerError extends Error = Error,
> {
  abstract handle(
    command: CommandBase,
  ): Promise<Result<CommandHandlerReturnType, CommandHandlerError>>;

  execute(
    command: CommandBase,
  ): Promise<Result<CommandHandlerReturnType, CommandHandlerError>> {
    //add Unit of Work
    return this.handle(command);
  }
}
