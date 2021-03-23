import { Entitie } from "@entities";

export interface Repositorie {
  find() : Promise<Entitie<any>>
  save(entitie: Entitie<any>) : Promise<Entitie<any>>
}
