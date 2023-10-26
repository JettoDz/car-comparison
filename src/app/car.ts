export interface Car {

    _id: string;
    model: string;
    make: string;
    year: number,
    trims: Trim[],
    photo: string,
    minPrice(): number
    
}

export interface Trim {
    trim: string,
    engine: string,
    suspension: string,
    transmition: string,
    height: number,
    width: number,
    length: number,
    dimentions_note: string,
    starting_price: number,
    autonomy: string,
    autonomy_note: string,
    drive: string,
    driving_modes: boolean,
}
