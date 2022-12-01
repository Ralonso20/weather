import * as locationHelper from "../helpers/userLocation";

class LocationService {
    constructor(public location?: string | undefined) {}
    getLocation = async () => {
        if(locationHelper.validateGeolocation()){
            const location = await locationHelper.getUserLocation();
            return await locationHelper.getCityName(location[0], location[1]);
        }else{
            alert("no se pudo obtener la ubicación");
        }
    }
    
    locationPermission = async () => {
        return await locationHelper.validateUserLocation();
    }

    setLocation = (location: string | undefined) => {
        this.location = location;
    }

    getStorageLocation = () => {
        return this.location;
    }
}

export const locationService = new LocationService();

