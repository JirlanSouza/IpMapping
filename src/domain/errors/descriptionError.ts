import { DomainError } from './domainError'

export class DescriptionError extends Error implements DomainError {
  constructor (ip: string) {
    super(`This description: ${ip} is invalid`)
    this.name = 'DescriptionInvalidError'
  }
}
