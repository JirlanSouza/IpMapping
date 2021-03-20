import { Either, left, right } from '../../../util/either'
import { DeviceDataInput } from './deviceDataInput'
import { DeviceDTO } from './deviceDTO'
import { IpError, DefaultGatewayError } from './errors'
import { Ip, DefaultGateway } from './objectValues'

export class Device {
  public readonly data: DeviceDTO

  constructor (data: DeviceDTO) {
    this.data = data
  }

  public create (dataInput: DeviceDataInput): Either<IpError | DefaultGatewayError, Device> {
    const ipValidated = Ip.create(dataInput.ip)

    if (ipValidated.isLeft()) return left(ipValidated.value)

    const defaultGatewayValidated = DefaultGateway.create(dataInput.defalutGateway)
    if (defaultGatewayValidated.isLeft()) return left(defaultGatewayValidated.value)

    const { type, name, subMasc } = dataInput
    return right(new Device({
      type,
      name,
      ip: ipValidated.value,
      subMasc,
      defalutGateway: defaultGatewayValidated.value
    }))
  }
}
