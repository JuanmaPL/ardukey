export interface menuOpts {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Apartamento {
    DESCRIPCION: string;
    DIRECCION: string;
    LAT: number;
    LON: number;
    IMG: string;
    ESTADO: boolean;
    IDKEY: string;
}

export interface Cerradura {
    ACTIVA: boolean;
    CODIGO: string;
}

export interface Alquiler {
    IDPROP: number;
    F_INICIO: Date;
    F_FIN: Date;
    IDUSER: string;
}