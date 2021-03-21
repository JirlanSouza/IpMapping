import { Either, left, right } from '../../../util/either';
import { Device, DeviceDTO } from '../../entitie/device';
import { DeviceErrors } from '../../entitie/device/errors/deviceErrors';
import { DeviceRepositorie, RepositorieError } from './deviceRepositorie';
import { SaveDevice } from './saveDevice'

export class SaveNewDevice implements SaveDevice {
  constructor (private deviceRepositorie: DeviceRepositorie, private device: Device) {

  }

  async save(params: SaveDevice.Params): Promise<Either<DeviceErrors | RepositorieError, DeviceDTO>> {
    const device = this.device.create(params)

    if (device.isLeft()) {
      return left(device.value)
    }
    const deviceSaveded = await this.deviceRepositorie.save(device.value.data)

    if (deviceSaveded.isLeft()) {
      return left(deviceSaveded.value)
    }

    return right(device.value.data)
    
  }
}
