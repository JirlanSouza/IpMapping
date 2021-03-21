import { Either, left, right } from '@shared'
import { DefaultGatewayError } from '../errors'
import { Ip } from '.'

export class DefaultGateway {
  private readonly defaultGatewayIp: Ip

  constructor (defaultGatewayIp: Ip) {
    this.defaultGatewayIp = defaultGatewayIp
    Object.freeze(this)
  }

  get value (): string {
    return this.defaultGatewayIp.value
  }

  static create (defaultGatewayIp: string): Either<DefaultGatewayError, DefaultGateway> {
    const defaultGatewayIpValidate = Ip.create(defaultGatewayIp)
    if (defaultGatewayIpValidate.isLeft()) return left(new DefaultGatewayError(defaultGatewayIp))

    return right(new DefaultGateway(defaultGatewayIpValidate.value))
  }
}
