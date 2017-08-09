
export interface IPlace{
    placeId: string,
    description:string,
    coordinates: ICoordinate
}

export interface ICoordinate{
    latitude: number,
    longitude:number
}
