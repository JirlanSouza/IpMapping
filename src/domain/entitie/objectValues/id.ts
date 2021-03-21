import { Either } from '../../../util/either'
import { IdError } from '../../errors'
import { IdProvider } from './idProvider'

export class Id {
  private idProvider: IdProvider
  private id: string

  constructor (idProvider: IdProvider, id?: string) {
    this.idProvider = idProvider

    if (id) {
      this.id = id
    } else {
      this.id = this.idProvider.create()
    }
    Object.freeze(this)
  }

  get value (): string {
    return this.id
  }

  private validate (id: string): Either<IdError, string> {
    id.trim()
    return this.idProvider.validate(id)
  }
}
