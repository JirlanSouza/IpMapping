import { SaveNewDevice } from '@useCases'
import { FileDeviceRepositorie } from '@infrastructure'
import { IdProviderFactory } from '@entities'
import { UuidIdProvider } from '@infrastructure'

export default async () => {
  IdProviderFactory.getStance().initialize(new UuidIdProvider())
  console.log('Entity ID Generators initialized')

  const saveDevice = new SaveNewDevice(new FileDeviceRepositorie)
  const newDevice = await saveDevice.save({
    type: 'CLP',
    name: 'RCR_LATA',
    ip: '10.29.91.11',
    subMasc: '255.255.255.0',
    defalutGateway: '10.29.91.1',
    description: 'CLP principal do pasteurizado'
  })
  console.log('Ok rodou', newDevice.value)
}