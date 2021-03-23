import { Either } from '@shared'
import { DeviceDTO, DeviceErrors } from '@entities'
import { RepositorieError } from './saveDeviceGateway'

export interface SaveDevice {
  execute: (params: SaveDevice.Params) => SaveDevice.Result
}

export interface DeviceData {
  typeId: string,
  name: string,
  ip: string,
  subMasc: string,
  defalutGateway: string,
  description: string
} 

export namespace SaveDevice {
  export type Params = DeviceData
  export type Result = Promise<Either<DeviceErrors | RepositorieError, DeviceDTO>>
}
