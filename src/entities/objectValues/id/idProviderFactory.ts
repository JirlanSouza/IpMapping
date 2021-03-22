import { IdProvider } from '@entities'

export class IdProviderFactory {
  public static stance: IdProviderFactory
  private idProvider: IdProvider

  public static getStance () {
    if(this.stance) {
      return this.stance
    }

    return new IdProviderFactory()
  }

  public initialize (idProvider: IdProvider)   {
    this.idProvider = idProvider
  }

  public getIdProvider (): IdProvider {
    return this.idProvider
  }
}