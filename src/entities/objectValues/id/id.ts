import { Either, right, left } from '@shared'
import { IdProviderFactory, IdError } from '@entities'

export class Id {
  private readonly id: string

  constructor(id: string) {
    this.id = id
    Object.freeze(this)
  }

  public static create(): Id {
    const idProvider = IdProviderFactory.getStance().getIdProvider()
    return  new Id(idProvider.create())    
  }

  public static validate(id: string): Either<IdError, Id> {
    const idProvider = IdProviderFactory.getStance().getIdProvider()
    const isValid = idProvider.validate(id)

    if (isValid) {
      return right(new Id(id))
    }
    return left(new IdError('id'))
  }

  get value(): string {
    return this.id
  }
}
