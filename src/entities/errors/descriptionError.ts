import { DomainError } from './domainError'

export class DescriptionError extends Error implements DomainError {
  constructor (description: string) {
    super(`This description: ${description} is invalid`)
    this.name = 'DescriptionInvalidError'
  }
}
