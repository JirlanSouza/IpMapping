import { Either, left, right } from '../../../util/either'
import { DeviceTypeDataInput, DeviceTypeDTO } from './'
import { NameError } from '../../errors'
import { Name } from '../objectValues/index'

export class DeviceType {
  public readonly data: DeviceTypeDTO

  constructor (data: DeviceTypeDTO) {
    this.data = data
    Object.freeze(this)
  }

  static create (dataInput: DeviceTypeDataInput): Either<NameError, DeviceType> {
    const nameValidated = Name.create(dataInput.name)
    if (nameValidated.isLeft()) return left(nameValidated.value)

    return right(new DeviceType({ id: '', name: nameValidated.value }))
  }
}
