import { NameError, IpError, DefaultGatewayError, DescriptionError } from '.'

export type DeviceErrors = NameError | IpError | DefaultGatewayError | DescriptionError
