import { DeviceDataInput } from './deviceDataInput'
import { DeviceDTO } from './deviceDTO'
import { ip } from './objectValues/ip'

export class device {
  private dataInput: DeviceDataInput
  private data: DeviceDTO

  constructor (datainput: DeviceDataInput) {
    this.dataInput = datainput
  }

  public create (): void | Error {
    this.data.ip = ip(this.dataInput.ip)
  }
}
