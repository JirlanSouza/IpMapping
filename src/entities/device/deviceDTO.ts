import { Id, Name, Ip, DefaultGateway, Description } from './objectValues'
import { DeviceType } from '@entities'

export interface DeviceDTO {
  id: Id,
  type: DeviceType,
  name: Name,
  ip: Ip,
  subMasc: string,
  defaultGateway: DefaultGateway
  description: Description
}
