import { Either, left, right } from '../../../util/either'
import { DeviceDataInput } from './deviceDataInput'
import { DeviceDTO } from './deviceDTO'
import { DeviceErrors } from './errors/deviceErrors'
import { Name, Ip, DefaultGateway, Description } from './objectValues'

export class Device {
  public readonly data: DeviceDTO

  constructor (data: DeviceDTO) {
    this.data = data
  }

  public create (dataInput: DeviceDataInput): Either< DeviceErrors, Device> {
    const nameValidated = Name.create(dataInput.name)
    if (nameValidated.isLeft()) return left(nameValidated.value)

    const ipValidated = Ip.create(dataInput.ip)
    if (ipValidated.isLeft()) return left(ipValidated.value)

    const defaultGatewayValidated = DefaultGateway.create(dataInput.defalutGateway)
    if (defaultGatewayValidated.isLeft()) return left(defaultGatewayValidated.value)

    const descriptionValidated = Description.create(dataInput.ip)
    if (descriptionValidated.isLeft()) return left(descriptionValidated.value)

    const { type, subMasc } = dataInput
    return right(new Device({
      type,
      name: nameValidated.value,
      ip: ipValidated.value,
      subMasc,
      defalutGateway: defaultGatewayValidated.value,
      description: descriptionValidated.value
    }))
  }
}
