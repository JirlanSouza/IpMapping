import { DomainError } from '../../../domainError'

export class DefaultGatewayError extends Error implements DomainError {
  constructor (ip: string) {
    super(`This ip: ${ip} the default gateway is invalid`)
    this.name = 'defaultGatewayInvalidError'
  }
}
