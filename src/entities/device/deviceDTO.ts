import { Name, Ip, DefaultGateway, Description } from './objectValues'

export interface DeviceDTO {
  type: string,
  name: Name,
  ip: Ip,
  subMasc: string,
  defaultGateway: DefaultGateway
  description: Description
}
