import { RepositorieError } from '../../../useCases/device/deviceRepositorie'

export class DeviceRepositorieError extends Error implements RepositorieError {
  constructor (msg: string) {
    super(msg)
    name: 'DeviceRepositorieError'
  }
}