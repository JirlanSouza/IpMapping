import { DomainError } from './domainError'

export class NameError extends Error implements DomainError {
  constructor (name: string) {
    super(`This name: ${name} is invalid`)
    this.name = 'NameInvalidError'
  }
}
