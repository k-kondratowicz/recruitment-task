export interface UserAddressGeolocation {
    lat: string;
    lng: string;
}

export interface UserAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: UserAddressGeolocation;
}

export interface UserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: UserAddress;
    phone: string;
    website:string;
    company: UserCompany;
}