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
    const ipValidated = ip(this.dataInput.ip)

    if (typeof ipValidated === 'string') this.data.ip = ipValidated
  }
}
