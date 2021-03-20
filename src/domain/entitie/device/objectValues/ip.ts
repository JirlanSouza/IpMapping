export function ip (ip: string): string {
  const ipSplited = ip.trim().split('.')

  const ipArrayOfNumber = ipSplited.map(octet => {
    return parseInt(octet)
  })

  return ipArrayOfNumber.join()
}
