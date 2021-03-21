import { Either, left, right } from '../../../util/either'
import { NameError } from '../../errors'

export class Name {
  private readonly name: string

  constructor (name: string) {
    this.name = name
    Object.freeze(this)
  }

  get value (): string {
    return this.name
  }

  static create (name: string): Either<NameError, Name> {
    const nameValidate = this.validate(name)
    if (!nameValidate.isValid) return left(new NameError(name))

    return right(new Name(nameValidate.nameValidated))
  }

  private static validate (name: string): { nameValidated: string, isValid: boolean } {
    name.trim()
    let isInvalidIp = false

    if (name.length < 2 && name.length > 80) {
      isInvalidIp = true
    }
    return {
      nameValidated: name,
      isValid: !isInvalidIp
    }
  }
}
