import { Either } from '../../util/either'
import { DeviceDataInput, DeviceDTO } from '../../entities/device'
import { DeviceErrors } from '../../entities/device/errors/deviceErrors'
import { RepositorieError } from './deviceRepositorie'

export interface SaveDevice {
  save: (params: SaveDevice.Params) => SaveDevice.Result
}

export namespace SaveDevice {
  export type Params = DeviceDataInput
  export type Result = Promise<Either<DeviceErrors | RepositorieError, DeviceDTO>>
}
