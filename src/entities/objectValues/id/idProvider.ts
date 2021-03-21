export interface IdProvider {
  create: () => string,
  validate: (id: string) => boolean
}
