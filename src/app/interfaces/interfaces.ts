export interface menuOpts {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Apartamento {
    ID: number;
    DESCRIPCION: string;
    DIRECCION: string;
    LAT: number;
    LON: number;
    IMG: string;
    ESTADO: boolean;
}

export interface Cerradura {
    ID: number;
    IDPROP: number;
    CODIGO: string;
}

export interface Alquiler {
    IDPROP: number;
    F_INICIO: Date;
    F_FIN: Date;
}