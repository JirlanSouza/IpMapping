import { Either, left, right } from '@shared';
import { Device, DeviceDTO, Id, IdError, DeviceErrors } from '@entities';
import { SaveDeviceGateway, RepositorieError } from './saveDeviceGateway';
import { SaveDevice } from './saveDevice'

export class SaveNewDevice implements SaveDevice {
  constructor (private gatway: SaveDeviceGateway) {

  }

  async execute (params: SaveDevice.Params): Promise<Either<IdError | DeviceErrors | RepositorieError, DeviceDTO>> {
    const isValidIdDeviceType = Id.validate(params.typeId)
    if (isValidIdDeviceType.isLeft()) return left(isValidIdDeviceType.value)

    const deviceType = await this.gatway.existDeiviceType(isValidIdDeviceType.value)
    if (deviceType.isLeft()) return left(deviceType.value)

    const deviceDataToCreate = {
      type: deviceType.value,
      name: params.name,
      ip: params.ip,
      subMasc: params.subMasc,
      defaultGateway: params.defalutGateway,
      description: params.description
      
    }

    const device = Device.create(deviceDataToCreate)
    if (device.isLeft()) return left(device.value)

    const { type, name, ip, subMasc, defaultGateway, description } = device.value.data
    const deviceDataToRepositorie = {
      type: deviceType.value.data.id,
      name: name.value,
      ip: ip.value,
      subMasc,
      defaultGateway: defaultGateway.value,
      description: description.value
    }
    const deviceSaveded = await this.gatway.saveDevice(deviceDataToRepositorie)

    if (deviceSaveded.isLeft()) {
      return left(deviceSaveded.value)
    }

    return right(device.value.data)
    
  }
}
