import { Either, left, right } from '@shared'
import { Entitie, DeviceDataInput, DeviceDTO, DeviceErrors } from '@entities'
import { Name, Ip, DefaultGateway, Description, Id } from './objectValues'

export class Device extends Entitie<DeviceDTO> {
  public readonly data: DeviceDTO

  constructor (data: DeviceDTO) {
    super(data)
  }

  public static create (dataInput: DeviceDataInput, id?: Id): Either< DeviceErrors, Device> {
      const newId = id ? id : Id.create()

    const nameValidated = Name.create(dataInput.name)
    if (nameValidated.isLeft()) return left(nameValidated.value)

    const ipValidated = Ip.create(dataInput.ip)
    if (ipValidated.isLeft()) return left(ipValidated.value)

    const defaultGatewayValidated = DefaultGateway.create(dataInput.defaultGateway)
    if (defaultGatewayValidated.isLeft()) return left(defaultGatewayValidated.value)

    const descriptionValidated = Description.create(dataInput.description)
    if (descriptionValidated.isLeft()) return left(descriptionValidated.value)

    const { type, subMasc } = dataInput
    return right(new Device({
      id: newId,
      type,
      name: nameValidated.value,
      ip: ipValidated.value,
      subMasc,
      defaultGateway: defaultGatewayValidated.value,
      description: descriptionValidated.value
    }))
  }
}
