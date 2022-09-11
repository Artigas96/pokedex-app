export interface Digimon{
    id: number
    slug: string
    name: string
    isJogress: boolean
    hasXAntibody: boolean
    rank: Rank
    rankId: number
    attribute: Attribute
    attributeId: number
    type: DigimonType
    typeId: number
    digimental: Digimental
    digimentalId: number
    //movies: Movie[]
    //series: Serie[]
    //episodes: Episode[]
    //fields: Fields[]
    //spirits: Spirit[]
    //partners: Character[]
    previous: Digimon[]
    next: Digimon[]
    groups: DigimonGroup[]
    otherNames: DigimonName[]
}


export interface Rank{
    id: number
    name: string
    description: string
    digimon: Digimon[]
}

export interface Attribute{
    id: number
    name: string
    symbol: string
    description: string
    strong: Attribute[]
    weak: Attribute[]
    digimon: Digimon[]
}

export interface DigimonType{
    id: number
    name: string
    digimon: Digimon[]
}

export interface Digimental{
    id: number
    name: string
    description: string
    attribute: string
    //digiDestined: Character
    digiDestinedId: number
    digimon: Digimon[]
    //crest: Crest
}

export interface DigimonGroup{
    id: number
    name: string
    description: string
    digimon: Digimon[]
}

export interface DigimonName{
    id: number
    name: string
    description: string
    digimon: Digimon[]
}