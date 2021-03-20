import { DomainError } from './domainError'

export class NameError extends Error implements DomainError {
  constructor (ip: string) {
    super(`This name: ${ip} is invalid`)
    this.name = 'NameInvalidError'
  }
}
