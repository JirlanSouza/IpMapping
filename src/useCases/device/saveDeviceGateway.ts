import { Either } from '@shared'
import { DeviceType, Id } from '@entities';

export interface RepositorieError extends Error {
  name: string
}

export interface DeviceDataToRepositorie {
  type: string,
  name: string,
  ip: string,
  subMasc: string,
  defaultGateway: string,
  description: string
}

export interface SaveDeviceGateway {
  saveDevice: (deviceData: DeviceDataToRepositorie) => Promise<Either<RepositorieError, void>>
  existDeiviceType: (id: Id) => Promise<Either<RepositorieError, DeviceType>>
}
