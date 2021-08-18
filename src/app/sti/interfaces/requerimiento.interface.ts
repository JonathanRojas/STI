import { Tipo } from "./tipo.interface";

export interface Requerimiento {
    Id:                number;
    Descripcion:       string;
    FechaInicio:       Date;
    FechaTermino:      Date;
    TipoDesarrollador: Tipo;
    TipoRequerimiento: Tipo;
    TipoEstado:        Tipo;
}