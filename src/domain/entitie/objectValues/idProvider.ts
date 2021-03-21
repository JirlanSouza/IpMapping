import { Either } from '../../../util/either'
import { IdError } from '../../errors'

export interface IdProvider {
  create: () => string,
  validate: (id: string) => Either<IdError, string>
}
