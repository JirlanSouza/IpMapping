export abstract class Entitie<T> {
  public readonly propities: T

  constructor ( props: T) {
    this.propities = props
    Object.freeze(this)
  }
}