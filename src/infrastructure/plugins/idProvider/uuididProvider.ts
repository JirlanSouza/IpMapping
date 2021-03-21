import { v4 as uuid, validate as uuidValidate } from 'uuid'
import { IdProvider } from '@entities'

export class UuidIdProvider implements IdProvider {
  create () {
    return uuid()
  }

  validate (id: string) {
    return uuidValidate(id)
  }
}
