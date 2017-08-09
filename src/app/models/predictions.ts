export interface IPredictions {
    predictions: IPrediction[],
    status: string
}
export interface IPrediction {
    description: string,
    id: string,
    matched_substrings: ISubstring[],
    place_id: string,
    reference: string,
    structured_formatting: {
        main_text: string,
        main_text_matched_substrings:ISubstring[],
        secondary_text: string
    },
    terms: ITerm[],
    types: string[]
}
export interface ITerm{
    value:number,
    offset:number
}
export interface ISubstring{
    length:number,
    offset:number
}
