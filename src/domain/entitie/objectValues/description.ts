import { Either, left, right } from '../../../util/either'
import { DescriptionError } from '../../errors'

export class Description {
  private readonly description: string

  constructor (description: string) {
    this.description = description
    Object.freeze(this)
  }

  get value (): string {
    return this.description
  }

  static create (description: string): Either<DescriptionError, Description> {
    const ipValidate = this.validate(description)
    if (!ipValidate.isValid) return left(new DescriptionError(description))

    return right(new Description(ipValidate.descriptionValidated))
  }

  private static validate (description: string): { descriptionValidated: string, isValid: boolean } {
    description.trim()
    let isInvalidIp = false

    if (description.length >= 10 && description.length <= 200) {
      isInvalidIp = true
    }
    return {
      descriptionValidated: description,
      isValid: !isInvalidIp
    }
  }
}
