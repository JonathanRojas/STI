export interface TipoSistema{
    Id: number,    
    Nombre: string    
}

export interface Sistema {
    Id: number,    
    Nombre: string,
    TipoSistema: TipoSistema,
    Url: string,
    Descripcion: string
}