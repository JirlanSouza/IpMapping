import { IdProvider } from '@entities'

export class IdProviderFactory {
  public static _stance: IdProviderFactory
  private idProvider: IdProvider

  private constructor () {}

  public static getStance () {
    if(!IdProviderFactory._stance) {
      this._stance = new IdProviderFactory()
    }
    return IdProviderFactory._stance

  }

  public initialize (idProvider: IdProvider)   {
    this.idProvider = idProvider
  }

  public getIdProvider (): IdProvider {
    return this.idProvider
  }
}