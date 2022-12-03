import * as locationHelper from "../helpers/userLocation";
class LocationService {
    constructor(public location?: string | boolean) {}
    getLocation = async () => {
        if(locationHelper.validateGeolocation()){
            try{
                const location = await locationHelper.getUserLocation();
                return await locationHelper.getCityName(location[0], location[1]);
            }
            catch(err){
                return false
            }
        }else{
            return false
        }
    }
    
    locationPermission = async () => {
        return await locationHelper.validateUserLocation();
    }

    setLocation = (location: string | boolean) => {
        this.location = location;
    }

    getStorageLocation = () => {
        return this.location;
    }
}

export const locationService = new LocationService();

