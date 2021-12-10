import { ExceptionCodes } from './exception.codes';
import { ExceptionBase } from './expception.base';

export class ArgumentInvalidException extends ExceptionBase {
  readonly code = ExceptionCodes.argumentInvalid;
}
