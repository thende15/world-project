export interface CountriesInterface {
    "name": {
        "common": string,
        "official": string
    },
    "tld": string[],
    "cioc": string,
    "currencies": {},
    "capital": string[],
    "region": string,
    "subregion": string,
    "languages": {}, 
    "borders": string[], 
    "flags": {
        "png": string,
        "svg": string
    }, 
    "population": number 
}
