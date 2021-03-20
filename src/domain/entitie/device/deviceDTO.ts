import { Ip, DefaultGateway } from './objectValues'

export interface DeviceDTO {
  type: string,
  name: string,
  ip: Ip,
  subMasc: string,
  defalutGateway: DefaultGateway
}
