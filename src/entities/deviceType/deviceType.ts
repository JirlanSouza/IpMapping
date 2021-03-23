import { Either, left, right } from '@shared'
import { Entitie, DeviceTypeDataInput, DeviceTypeDTO, NameError, Name } from '@entities'

export class DeviceType extends Entitie<DeviceTypeDTO> {
  public readonly data: DeviceTypeDTO

  constructor (data: DeviceTypeDTO) {
    super(data)
  }

  static create (dataInput: DeviceTypeDataInput): Either<NameError, DeviceType> {
    const nameValidated = Name.create(dataInput.name)
    if (nameValidated.isLeft()) return left(nameValidated.value)

    return right(new DeviceType({ id: '', name: nameValidated.value }))
  }
}
