import { Tipo } from "./tipo.interface";

export interface Sistema {
    Id: number,    
    Nombre: string,
    TipoSistema: Tipo,
    Url: string,
    Descripcion: string
}