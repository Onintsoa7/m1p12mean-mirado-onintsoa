export interface Facture {
    _id?: string;
    numeroFacture?: string;
    client: any;
    typeService: any;
    service: any;
    piece?:any;
    voiture: string;
    date?: Date;
    coutReparation: number | any;
    coutPiece?: number | any;
    montantPayer: number | any;
    prixHeure?: number;
}