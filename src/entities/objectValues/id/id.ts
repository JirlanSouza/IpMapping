import { Either, left, right } from '@shared'
import { IdError, IdProvider } from '@entities'

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
    if (this.idProvider.validate(id)) {
      return right(id)
    }
    return left(new IdError(id))
  }
}
