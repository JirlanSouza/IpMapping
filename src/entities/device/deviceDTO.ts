import { Id, Name, Ip, DefaultGateway, Description } from './objectValues'

export interface DeviceDTO {
  id: Id,
  type: string,
  name: Name,
  ip: Ip,
  subMasc: string,
  defaultGateway: DefaultGateway
  description: Description
}
