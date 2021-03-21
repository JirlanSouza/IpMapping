import fs from 'fs'
import path from 'path'
import { DeviceDataToRepositorie, DeviceRepositorie, RepositorieError } from '../../../useCases/device/deviceRepositorie'
import { Either, left, right } from '../../../util/either'
import { DeviceRepositorieError } from './deviceRepositorieError'

export class FileDeviceRepositorie implements DeviceRepositorie {
  async save (device: DeviceDataToRepositorie): Promise<Either<RepositorieError, void>> {

    const existDeviceFile = await fs.existsSync(path.join(__dirname, '..', '..', 'fileDb', 'device.json'))

    let devices: DeviceDataToRepositorie[] = []
    console.log(existDeviceFile);
    

    if (existDeviceFile) {
      const currentDevicesInFile: DeviceDataToRepositorie[] = JSON.parse( await fs.readFileSync(path.join(__dirname, '..', '..', 'fileDb', 'device.json')).toString())
      devices = currentDevicesInFile
      console.log(currentDevicesInFile, devices)
    }
    devices.push(device)
    await fs.writeFileSync(path.join(__dirname, '..', '..', 'fileDb', 'device.json'), JSON.stringify(devices))

    const deviceJson: DeviceDataToRepositorie[] = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'fileDb', 'device.json')).toString())

    console.log(deviceJson)

    if (deviceJson[deviceJson.length - 1].name !== device.name) {
      return left(new DeviceRepositorieError('Error of save device'))
    }

    return right(undefined)
  }
}