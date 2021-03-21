import { DomainError } from './domainError'

export class IdError extends Error implements DomainError {
  constructor (id: string) {
    super(`This id: ${id} is invalid`)
    this.name = 'IdInvalidError'
  }
}
