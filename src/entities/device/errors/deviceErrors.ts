import { NameError, DescriptionError } from '@entities'
import { IpError, DefaultGatewayError } from './'

export type DeviceErrors = NameError | IpError | DefaultGatewayError | DescriptionError
