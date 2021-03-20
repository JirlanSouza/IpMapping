export function ip (ip: string): string | Error {
  const ipSplited = ip.trim().split('.')
  let ipErrorValidate = false

  const ipArrayOfNumber = ipSplited.map(octet => {
    const octectNumber = parseInt(octet)

    if (octectNumber < 0 || octectNumber > 255) ipErrorValidate = true
    return octectNumber
  })

  return ipErrorValidate ? new Error('') : ipArrayOfNumber.join()
}
