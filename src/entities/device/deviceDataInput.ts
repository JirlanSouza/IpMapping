import { DeviceType } from "@entities";

export interface DeviceDataInput {
  type: DeviceType,
  name: string,
  ip: string,
  subMasc: string,
  defaultGateway: string,
  description: string
}
