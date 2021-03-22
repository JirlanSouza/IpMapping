import { Either } from '@shared'
import { DeviceDataInput, DeviceDTO, DeviceErrors } from '@entities'
import { RepositorieError } from './deviceRepositorie'

export interface SaveDevice {
  execute: (params: SaveDevice.Params) => SaveDevice.Result
}

export namespace SaveDevice {
  export type Params = DeviceDataInput
  export type Result = Promise<Either<DeviceErrors | RepositorieError, DeviceDTO>>
}
