export type StreetType = {
    title: string;
}

export type AddressType = {
    number: number;
    street: StreetType;
}

export type HouseType = {
    built: number;
    repaired: boolean;
    address: AddressType;
}

export type GovernmentBuildingType = {
    type: "Hospital" | "Fire Station";
    budget: number;
    staffCount: number;
    address: AddressType;
}

export type CityType = {
    title: string;
    houses: Array<HouseType>;
    governmentBuildings: Array<GovernmentBuildingType>;
    citizensNumber: number;
}
