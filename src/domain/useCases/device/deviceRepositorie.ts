import { Either } from '../../../util/either'
import { DeviceDTO } from '../../entitie/device';

export interface RepositorieError extends Error {
  name: string
}

export interface DeviceRepositorie {
  save: (device: DeviceDTO) => Promise<Either<RepositorieError, void>>
}
