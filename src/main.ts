import { left, right } from './util/either'
import { Device } from './domain/entitie/device'
import { SaveNewDevice } from './domain/useCases/device/saveNewDevice'
import { FileDeviceRepositorie } from './data/device/fileDeviceRepositorie'

export default async () => {
  const saveDevice = new SaveNewDevice(new FileDeviceRepositorie)
  const newDevice = await saveDevice.save({
    type: 'CLP',
    name: 'PAL_LATA',
    ip: '10.29.91.11',
    subMasc: '255.255.255.0',
    defalutGateway: '10.29.91.1',
    description: 'CLP principal do pasteurizado'
  })
  console.log('Ok rodou', newDevice)
}