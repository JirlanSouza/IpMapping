import { Either, left, right } from '@shared';
import { Device, DeviceDTO, DeviceErrors } from '@entities';
import { DeviceRepositorie, RepositorieError } from './deviceRepositorie';
import { SaveDevice } from './saveDevice'

export class SaveNewDevice implements SaveDevice {
  constructor (private deviceRepositorie: DeviceRepositorie) {

  }

  async save(params: SaveDevice.Params): Promise<Either<DeviceErrors | RepositorieError, DeviceDTO>> {
    const device = Device.create(params)

    if (device.isLeft()) {
      return left(device.value)
    }

    const { type, name, ip, subMasc, defaultGateway, description } = device.value.data
    const deviceDataToRepositorie = {
      type,
      name: name.value,
      ip: ip.value,
      subMasc,
      defaultGateway: defaultGateway.value,
      description: description.value
    }
    const deviceSaveded = await this.deviceRepositorie.save(deviceDataToRepositorie)

    if (deviceSaveded.isLeft()) {
      return left(deviceSaveded.value)
    }

    return right(device.value.data)
    
  }
}
