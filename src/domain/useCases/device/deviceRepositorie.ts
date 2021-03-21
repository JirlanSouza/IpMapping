import { Either } from '../../../util/either'
import { DeviceDTO } from '../../entitie/device';

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

export interface DeviceRepositorie {
  save: (deviceData: DeviceDataToRepositorie) => Promise<Either<RepositorieError, void>>
}
