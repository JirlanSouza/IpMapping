import { IdProviderFactory } from '@entities'

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

  get value(): string {
    return this.id
  }
}
