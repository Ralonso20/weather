export class LocationClass{
    constructor(public city: string, public country: string, public region: string){
        
    }
    
    static createLocation(obj: Object){
        return new LocationClass(
            obj["city"],
            obj["country"],
            obj["region"]
        )
    }
}
