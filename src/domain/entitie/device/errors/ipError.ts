import { DomainError } from '../../../domainError'

export class IpError extends Error implements DomainError {
  constructor (ip: string) {
    super(`This ip: ${ip} is invalid`)
    this.name = 'ipInvalidError'
  }
}
