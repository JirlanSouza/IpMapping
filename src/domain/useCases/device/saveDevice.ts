import { Either } from '../../../util/either'
import { DeviceDataInput, DeviceDTO } from '../../entitie/device'
import { DeviceErrors } from '../../entitie/device/errors/deviceErrors'

export interface SaveDevice {
  save: (diviceDataInput: DeviceDataInput) => Promise<Either<DeviceErrors, DeviceDTO>>
}

namespace SaveDevice {
  export type Params = DeviceDataInput
  export type Result = DeviceDTO
}
