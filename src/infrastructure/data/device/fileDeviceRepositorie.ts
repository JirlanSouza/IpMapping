import fs from 'fs'
import path from 'path'
import { DeviceDataToRepositorie, DeviceRepositorie, RepositorieError } from '@useCases'
import { Either, left, right } from '@shared'
import { DeviceRepositorieError } from './deviceRepositorieError'

export class FileDeviceRepositorie implements DeviceRepositorie {
  async save (device: DeviceDataToRepositorie): Promise<Either<RepositorieError, void>> {
    const filePath = path.join(__dirname, '../../../../', 'fileDb', 'device.json')

    const existDeviceFile = fs.existsSync(filePath)

    let devices: DeviceDataToRepositorie[] = []
    

    if (existDeviceFile) {
      const currentDevicesInFile: DeviceDataToRepositorie[] = JSON.parse((fs.readFileSync(filePath)).toString())
      devices = currentDevicesInFile
    }

    devices.push(device)
    fs.writeFileSync(filePath, JSON.stringify(devices))

    const deviceJson: DeviceDataToRepositorie[] = JSON.parse(fs.readFileSync(filePath).toString())

    if (deviceJson[deviceJson.length - 1].name !== device.name) {
      return left(new DeviceRepositorieError('Error of save device'))
    }

    return right(undefined)
  }
}