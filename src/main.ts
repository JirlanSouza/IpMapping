import { SaveNewDevice } from '@useCases'
import { FileDeviceRepositorie } from './infrastructure/data/device/fileDeviceRepositorie'

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