import { Tipo } from "./tipo.interface";

export interface Sistema {
    Id: number,    
    Nombre: string,
    Url: string,
    UbicacionTeam: string,
    Descripcion: string,
    Desarrollador: string,
    Observacion: string,
    FechaPublicacion: Date,
    TipoSistema: Tipo,
    TipoEscritorioVirtual: Tipo,
    TipoBaseDatos: Tipo,
    TipoEstadoDesarrollo: Tipo,
    TipoUsuario: Tipo,
    TipoIIS: Tipo,
    TipoFrameworkWeb: Tipo,
    TipoFrameworkNet: Tipo
}