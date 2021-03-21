import { Either, left, right } from '@shared'
import { IpError } from '../errors'

export class Ip {
  private readonly ip: string

  constructor (ip: string) {
    this.ip = ip
    Object.freeze(this)
  }

  get value (): string {
    return this.ip
  }

  static create (ip: string): Either<IpError, Ip> {
    const ipValidate = this.validate(ip)
    if (!ipValidate.isValid) return left(new IpError(ip))

    return right(new Ip(ipValidate.ipValidated))
  }

  private static validate (ip: string): { ipValidated: string, isValid: boolean } {
    const ipSplited = ip.trim().split('.')
    let isInvalidIp = false

    ipSplited.forEach(octet => {
      const octectNumber = parseInt(octet)
      if (octectNumber < 0 || octectNumber > 255) {
        isInvalidIp = true
      }
    })
    return {
      ipValidated: ipSplited.join('.'),
      isValid: !isInvalidIp
    }
  }
}
